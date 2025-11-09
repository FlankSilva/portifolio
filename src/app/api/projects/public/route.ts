import { NextResponse } from "next/server";
import { queryAll } from "@/lib/db";

// GET - Listar projetos públicos (sem autenticação)
export async function GET() {
  try {
    const projects = (await queryAll(
      "SELECT * FROM projects ORDER BY display_order ASC, id ASC"
    )) as Array<{
      id: number;
      name: string;
      description: string;
      stack: string;
      link: string;
      repo_name: string;
      repo: string;
      image_url: string | null;
      created_at: string;
      updated_at: string;
    }>;

    // Transformar para o formato esperado pelo frontend
    const formattedProjects = projects.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      stack: project.stack,
      link: project.link,
      repoName: project.repo_name,
      repo: project.repo,
      image: project.image_url,
    }));

    return NextResponse.json({ projects: formattedProjects });
  } catch (error) {
    console.error("Erro ao listar projetos públicos:", error);
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
