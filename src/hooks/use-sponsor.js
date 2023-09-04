import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const useSponsor = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const sponsors = useSelector((state) => state.sponsors.sponsors);
  const sponsorIndex = useMemo(
    () => sponsors.findIndex((item) => item.id == id),
    [sponsors]
  );
  const sponsor = useMemo(
    () => (sponsorIndex > -1 ? sponsors[sponsorIndex] : {}),
    [sponsorIndex, searchParams.get("edit")]
  );

  return { sponsor, sponsorIndex };
};
