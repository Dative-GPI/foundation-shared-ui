/**
 * `customType` de l'événement chatbot portant un dashboard généré : se rend via le slot
 * `#custom-dashboard-ready` de `FSChatBot`, avec le dashboard en `payload`.
 */
export const DASHBOARD_READY = "dashboard-ready";

/**
 * Au-delà de ce délai sans aucun événement, on considère que le moteur ne répondra plus
 * et on rend la main à l'utilisateur. Seul l'affichage est débloqué : le tour peut
 * toujours être en cours côté back.
 */
export const INACTIVITY_TIMEOUT_MS = 60_000;

/**
 * Libellés par défaut des outils du moteur, affichés pendant que l'IA travaille.
 * Clé = `LlmName` de l'outil côté back ; la clé de traduction est
 * `page.analysis.tool.{nom-en-kebab-case}`.
 */
export const TOOL_LABELS: Record<string, string> = {
  "explore_population": "Exploring your devices",
  "search_population": "Searching for devices",
  "select_population": "Selecting devices",
  "create_entity_preset": "Creating a device filter",
  "create_date_preset": "Creating a period filter",
  "remove_preset": "Removing a filter",
  "resolve_period": "Resolving the period",
  "resolve_charts": "Looking for matching charts",
  "get_dashboard_examples": "Looking at dashboard examples",
  "get_grid_occupancy": "Checking the layout",
  "place_widget": "Placing a widget",
  "move_widget": "Moving a widget",
  "remove_widget": "Removing a widget",
  "configure_chart_widget": "Configuring a chart",
  "configure_control_widget": "Configuring a control widget",
  "configure_text_widget": "Configuring a text widget",
  "present_dashboard": "Building the dashboard"
};
