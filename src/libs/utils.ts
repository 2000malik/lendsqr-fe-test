type StorageType = {
  key: string;
  data: Object;
  next?: () => void;
};

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

export const setStorage = ({ key, data, next }: StorageType) => {
  if (typeof window !== "undefined") {
    let user = JSON.stringify(data);
    // can further encrypt data
    localStorage.setItem(key, user);
  }
  next?.();
};

export const getStorageItem = (key: string) => {
  try {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key) || "";
      return data && JSON.parse(data);
    }
  } catch (error) {
    localStorage.removeItem(key);
  }
};
