declare global {
  interface Window {
    gtag: (
      option: string,
      action: string,
      options: Record<string, unknown>,
    ) => void;
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: Record<string, string>) => {
  if (!window.gtag) {
    console.warn(
      "window.gtag is not defined. This could mean your google anylatics script has not loaded on the page yet.",
    );
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
