import useTranslation from "../hooks/25-useTranslation/useTranslation";

export default function TranslationComponent() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
      <button onClick={() => setLanguage("en")}>Change To English</button>
      <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
    </>
  );
}
