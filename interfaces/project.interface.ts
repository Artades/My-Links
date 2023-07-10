export interface ProjectProps {
    id: number;
    name: string;
    description: string;
    created_at: string;
    owner: {
        avatar_url: string;
        login: string;
    };
    language: string,
}
