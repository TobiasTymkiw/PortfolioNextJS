interface infoform {
  firstName: string;
  email: string;
  message: string;
}
interface experience {
    title: string;
    time: string;
    where: string;
    description?: string;
    href?: string;
}
export type { infoform, experience };
