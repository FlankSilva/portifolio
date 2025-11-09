"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { ProjectList } from "@/components/admin/ProjectList";
import { Button } from "@/components/elements/Form/Button";
import { SignOut } from "phosphor-react";

interface Project {
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
}

export default function DashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao carregar projetos");
      }

      setProjects(data.projects);
    } catch (err) {
      setError("Erro ao carregar projetos");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar projeto");
      }

      // Atualizar lista
      setProjects(projects.filter((p) => p.id !== id));
    } catch (err) {
      alert("Erro ao deletar projeto");
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black-900 flex flex-col">
        {/* Header */}
        <header className="border-b border-zinc-200 bg-black-600">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-5">
                <h1 className="text-2xl font-bold text-green-500">Dashboard</h1>
                <p className="text-zinc-200 text-sm mt-1">
                  Gerencie seus projetos
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => router.push("/admin/projects/new")}>
                  Novo Projeto
                </Button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 border border-zinc-200 py-2 px-4 rounded hover:bg-black-800 transition-all duration-300 text-zinc-200"
                >
                  <SignOut size={18} />
                  Sair
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 mt-28">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              <p className="text-zinc-200 mt-4">Carregando projetos...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            <ProjectList projects={projects} onDelete={handleDelete} />
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
