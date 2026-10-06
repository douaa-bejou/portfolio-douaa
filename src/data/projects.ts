import type { IconName } from "../utils/icons";

/**
 * Contenu de la section « Projets ».
 *
 * Sources :
 *   [CV] — extrait du CV de Douaa Bejou
 *   [É]  — interprétation éditoriale (les formulations « problème » et
 *          « solution » sont des reformulations narratives)
 *
 * Aucun projet n'a de lien externe, aucun projet n'a d'image.
 */

export interface ProjectTechnology {
  id: string;
  label: string;
  icon: IconName;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies: ProjectTechnology[];
}

/* ------------------------------------------------------------------ */
/*  PROJETS — du plus récent au plus ancien                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: "scrap-platform",
    number: "01",
    name: "Développement d’une application web de suivi et d’analyse du SCRAP",
    category: "Qualité · Digitalisation · Analyse du SCRAP",
    context: "Projet de fin d'études · 2026 · Hutchinson Maroc, Tanger",
    problem:
      "Les données qualité et production nécessitaient une centralisation fiable afin de faciliter le suivi du SCRAP, l’analyse des défauts et l’identification des principales sources de non-conformités.",
    solution:
      "Développement d’une application web permettant de centraliser la saisie, suivre les indicateurs qualité et analyser le SCRAP à travers des dashboards interactifs.",
    deliverables: [
      "Développement d’une application permettant de centraliser la saisie et le suivi des données qualité et de production dans la plateforme d’analyse du SCRAP.",
      "Mise en place d’une saisie des défauts permettant d’enregistrer, par date et par désignation, les défauts et leurs quantités NOK, ainsi que le moulage/profil et la zone concernés.",
      "Mise en place d’une saisie en fin de shift des quantités globales par désignation : OK, Scrap et Rework.",
      "Automatisation du calcul des indicateurs qualité : % NOK, % Scrap et % Rework.",
      "Conception d’un dashboard interactif avec des indicateurs et graphiques journaliers, hebdomadaires et mensuels.",
      "Analyse des NOK par désignation, défaut, moulage/profil et zone.",
      "Mise en place de filtres dynamiques par date, semaine, mois, année et désignation afin de faciliter l’analyse des performances qualité.",
      "Développement d’outils de visualisation permettant d’identifier les principales sources de non-conformités et de faciliter la prise de décision.",
    ],
    technologies: [
      { id: "react", label: "React", icon: "atom" },
      { id: "java", label: "Java", icon: "coffee" },
      { id: "sql", label: "SQL", icon: "database" },
      { id: "dashboard", label: "Dashboard", icon: "bar-chart" },
      { id: "kpi", label: "Indicateurs qualité", icon: "gauge" },
    ],
  },
  {
    id: "project-manager",
    number: "02",
    name: "Application web de gestion de projet",
    category: "Logiciel · Gestion de projet",
    context: "Projet de fin d'études · 2023 · MediaCaris",
    problem:
      "Les projets, tâches et affectations utilisateurs étaient suivis dans plusieurs outils, sans vue unique de l'avancement.",
    solution:
      "Une application web de gestion des projets, des tâches et des utilisateurs — avec affectation et suivi des tâches en temps réel.",
    deliverables: [
      "Gestion des projets, des tâches et des utilisateurs.",
      "Affectation et suivi des tâches en temps réel.",
      "Vue centralisée de l'avancement pour toute l'équipe.",
    ],
    technologies: [
      { id: "web", label: "Application web", icon: "globe" },
      { id: "realtime", label: "Temps réel", icon: "activity" },
      { id: "multi-user", label: "Multi-utilisateur", icon: "users" },
    ],
  },
];
