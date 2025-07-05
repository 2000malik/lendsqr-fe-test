export const isActiveLink = ({
  link,
  pathname,
}: {
  link?: string;
  pathname: string;
}) => {
  if (link === "/") {
    return pathname === link;
  }
  return pathname?.startsWith(`${link}`);
};