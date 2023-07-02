import {
  useTranslation as nextUseTranslation,
} from "next-i18next";

const useTranslation = (ns?: string) => nextUseTranslation(ns);

export { useTranslation };
