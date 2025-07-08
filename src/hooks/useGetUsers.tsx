"use client";
import { useEffect, useState } from "react";

export const useGetUsers = () => {
  const [users, setUsers] = useState<userInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/db.json") // mimic actual external URL
      .then((response) => response.json())
      .then((data) => {
        setUsers(data?.users || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return {
    users,
    loading,
  };
};
