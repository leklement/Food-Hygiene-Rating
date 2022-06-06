import { useCallback } from "react";
import { IAuthority } from "../api/responseTypes";

export function useSelectAuthorityProps() {
  return useCallback((authority: IAuthority) => {
    const { LocalAuthorityId, Name, SchemeType } = authority;

    return { value: LocalAuthorityId, label: Name, schemeType: SchemeType };
  }, []);
}
