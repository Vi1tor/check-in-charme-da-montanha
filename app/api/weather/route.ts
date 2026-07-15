import { NextRequest, NextResponse } from "next/server";

// Coordinates for Monte Verde, MG, Brazil
const LATITUDE = -22.8624;
const LONGITUDE = -46.0375;

export async function GET(req: NextRequest) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code&timezone=America%2FSao_Paulo`;
    
    const response = await fetch(url, {
      next: { revalidate: 900 }, // Cache the weather result for 15 minutes
    });

    if (!response.ok) {
      throw new Error("Failed to fetch weather data from source");
    }

    const data = await response.json();
    const current = data.current;

    // Map WMO Weather Interpretation Codes (WMO code) to friendly descriptions and icons
    // See https://open-meteo.com/en/docs for code list
    const weatherMap: Record<number, { text: string; icon: string }> = {
      0: { text: "Céu limpo", icon: "☀️" },
      1: { text: "Predominantemente limpo", icon: "🌤️" },
      2: { text: "Parcialmente nublado", icon: "⛅" },
      3: { text: "Encoberto", icon: "☁️" },
      45: { text: "Nevoeiro", icon: "🌫️" },
      48: { text: "Nevoeiro com geada", icon: "🌫️" },
      51: { text: "Garoa leve", icon: "🌧️" },
      53: { text: "Garoa moderada", icon: "🌧️" },
      55: { text: "Garoa densa", icon: "🌧️" },
      61: { text: "Chuva leve", icon: "🌧️" },
      63: { text: "Chuva moderada", icon: "🌧️" },
      65: { text: "Chuva forte", icon: "🌧️" },
      71: { text: "Neve leve", icon: "❄️" },
      73: { text: "Neve moderada", icon: "❄️" },
      75: { text: "Neve forte", icon: "❄️" },
      77: { text: "Grãos de neve", icon: "❄️" },
      80: { text: "Pancadas de chuva leve", icon: "🌦️" },
      81: { text: "Pancadas de chuva moderada", icon: "🌦️" },
      82: { text: "Pancadas de chuva violenta", icon: "⛈️" },
      95: { text: "Trovoada leve ou moderada", icon: "⛈️" },
      96: { text: "Trovoada com granizo leve", icon: "⛈️" },
      99: { text: "Trovoada com granizo forte", icon: "⛈️" },
    };

    const code = current?.weather_code ?? 0;
    const condition = weatherMap[code] || { text: "Parcialmente nublado", icon: "⛅" };

    // Adjust icon for night time if applicable
    let icon = condition.icon;
    if (current?.is_day === 0 && code === 0) {
      icon = "🌙";
    } else if (current?.is_day === 0 && (code === 1 || code === 2)) {
      icon = "☁️";
    }

    return NextResponse.json({
      temp: Math.round(current?.temperature_2m ?? 15),
      feelsLike: Math.round(current?.apparent_temperature ?? 15),
      humidity: current?.relative_humidity_2m ?? 70,
      conditionText: condition.text,
      icon,
      isDay: current?.is_day === 1,
    });
  } catch (error) {
    console.error("Weather route error:", error);
    // Fallback static weather for Monte Verde, MG (typically a cool mountain climate)
    return NextResponse.json({
      temp: 16,
      feelsLike: 15,
      humidity: 75,
      conditionText: "Clima serrano agradável",
      icon: "🌲",
      isDay: true,
    });
  }
}
