'use client';

import { createElement, useEffect, useState } from 'react';
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSun,
  Drop,
  Moon,
  Snowflake,
  Sun,
  Tree,
  Umbrella,
  type Icon,
} from '@phosphor-icons/react';

export interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  conditionText: string;
  isDay: boolean;
  code: number | null;
  min: number | null;
  max: number | null;
  rainChance: number | null;
}

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/weather');
        if (res.ok) {
          const data = await res.json();
          if (!cancelled) setWeather(data);
        }
      } catch (err) {
        console.error('Error fetching weather:', err);
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 600000); // 10 minutes
    return () => {
      cancelled = true;
      clearInterval(weatherInterval);
    };
  }, []);

  return weather;
}

// WMO weather code -> icon. See https://open-meteo.com/en/docs for code list
function weatherIcon(code: number | null, isDay: boolean): Icon {
  if (code === null) return Tree;
  if (code === 0 || code === 1) return isDay ? Sun : Moon;
  if (code === 2) return isDay ? CloudSun : CloudMoon;
  if (code === 3) return Cloud;
  if (code === 45 || code === 48) return CloudFog;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return Snowflake;
  if (code >= 95) return CloudLightning;
  if (code >= 51) return CloudRain;
  return Cloud;
}

export function WeatherChip({ weather }: { weather: WeatherData | null }) {
  if (!weather) return null;

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-[#F7F4EE]/25 bg-[#141E17]/40 backdrop-blur-sm px-3 py-1.5 text-xs text-[#F7F4EE]"
      aria-label={`Agora em Monte Verde: ${weather.temp}°, ${weather.conditionText}`}
    >
      {createElement(weatherIcon(weather.code, weather.isDay), { className: 'w-4 h-4 text-[#E6C786]' })}
      <span className="font-mono tabular-nums font-medium">{weather.temp}°</span>
      <span className="text-[#E5DEC9]/90">{weather.conditionText}</span>
    </div>
  );
}

export function WeatherCard({ weather }: { weather: WeatherData | null }) {
  if (!weather) return null;

  return (
    <div className="rounded-2xl bg-white border border-[#E5DEC9] p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-[#1E2F23] text-[#E6C786] flex items-center justify-center shrink-0">
          {createElement(weatherIcon(weather.code, weather.isDay), { className: 'w-8 h-8' })}
        </div>
        <div>
          <div className="text-xs font-medium text-[#6E472B]">Agora em Monte Verde</div>
          <div className="flex flex-wrap items-baseline gap-x-2 mt-0.5">
            <span className="text-3xl font-semibold text-[#1E2F23] font-mono tabular-nums">{weather.temp}°</span>
            <span className="text-base font-medium text-[#1E2F23]">{weather.conditionText}</span>
          </div>
          <div className="text-xs text-[#57534E] mt-0.5">Sensação de {weather.feelsLike}°</div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-[#EFECE4] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#57534E]">
        {weather.min !== null && (
          <div>
            <span className="text-[#6E472B]">Mín.</span>{' '}
            <span className="font-mono tabular-nums font-medium text-[#1E2F23]">{weather.min}°</span>
          </div>
        )}
        {weather.max !== null && (
          <div>
            <span className="text-[#6E472B]">Máx.</span>{' '}
            <span className="font-mono tabular-nums font-medium text-[#1E2F23]">{weather.max}°</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <Drop className="w-4 h-4 text-[#6E472B]" />
          <span>
            Umidade:{' '}
            <span className="font-mono tabular-nums font-medium text-[#1E2F23]">{weather.humidity}%</span>
          </span>
        </div>
        {weather.rainChance !== null && (
          <div className="flex items-center gap-1.5">
            <Umbrella className="w-4 h-4 text-[#6E472B]" />
            <span>
              Chance de chuva hoje:{' '}
              <span className="font-mono tabular-nums font-medium text-[#1E2F23]">{weather.rainChance}%</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
