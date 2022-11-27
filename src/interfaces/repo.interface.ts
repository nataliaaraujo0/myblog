export interface RepoProps {
  id: number;
  name: string;
  full_name: string;
  description?: string;
  language: string;
  homepage?: string;
}

export interface ListRepositoriesProps {
  repos?: RepoProps[];
  onClick?: () => void;
}
