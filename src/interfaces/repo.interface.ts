export interface RepoProps {
  name: string;
  full_name: string;
  description?: string;
  language: string;
  homepage?: string;
}

export interface RepoData {
  repoData: RepoProps[];
}
