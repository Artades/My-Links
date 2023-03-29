export interface LinkProps {
    map(arg0: (link: any) => JSX.Element): import("react").ReactNode;
    id:       number;
    title:    string;
    path:     string;
    imageUrl: string;
    gradient: Gradient

}
type Gradient = {
from: string;
to: string
}