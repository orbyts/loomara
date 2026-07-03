export type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "suhail-theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function readThemePreference(): ThemePreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isThemePreference(stored) ? stored : "system";
}

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "system") {
    return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
  }
  return preference;
}

export function applyTheme(preference: ThemePreference): void {
  const resolved = resolveTheme(preference);
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function setThemePreference(preference: ThemePreference): void {
  localStorage.setItem(STORAGE_KEY, preference);
  applyTheme(preference);
  window.dispatchEvent(
    new CustomEvent<ThemePreference>("suhail:theme-change", {
      detail: preference,
    }),
  );
}

export function initializeTheme(): () => void {
  const media = window.matchMedia(MEDIA_QUERY);
  const handleSystemChange = (): void => {
    if (readThemePreference() === "system") applyTheme("system");
  };

  applyTheme(readThemePreference());
  media.addEventListener("change", handleSystemChange);
  return () => media.removeEventListener("change", handleSystemChange);
}
