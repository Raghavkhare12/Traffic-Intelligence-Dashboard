const API_URL =
  "http://127.0.0.1:8000";

export async function getEventStats(
  month: number
) {
  const res = await fetch(
    `http://127.0.0.1:8000/event-stats?month=${month}`
  );

  return res.json();
}

export async function getHotspots() {
  const res = await fetch(
    `${API_URL}/hotspots`
  );

  return res.json();
}

export async function getEventCauses(
  month?: number
) {

  const res = await fetch(
    `http://127.0.0.1:8000/event-causes${
      month
      ? `?month=${month}`
      : ""
    }`
  );

  return res.json();
}

export async function getCalendarEvents() {
  const res = await fetch(
    "http://127.0.0.1:8000/calendar"
  );

  return res.json();
}

export async function getHeatmap() {
  const res = await fetch(
    "http://127.0.0.1:8000/heatmap"
  );

  return res.json();
}