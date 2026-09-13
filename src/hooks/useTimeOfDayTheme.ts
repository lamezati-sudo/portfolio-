import { useEffect } from 'react';

const DAY_START_HOUR = 6;
const NIGHT_START_HOUR = 18;

export const isNightTime = (date = new Date()) => {
  const hour = date.getHours();
  return hour < DAY_START_HOUR || hour >= NIGHT_START_HOUR;
};

export const applyTimeOfDayTheme = () => {
  document.documentElement.classList.toggle('dark', isNightTime());
};

const msUntilNextSwitch = () => {
  const now = new Date();
  const next = new Date(now);
  const hour = now.getHours();

  if (hour < DAY_START_HOUR) {
    next.setHours(DAY_START_HOUR, 0, 0, 0);
  } else if (hour < NIGHT_START_HOUR) {
    next.setHours(NIGHT_START_HOUR, 0, 0, 0);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(DAY_START_HOUR, 0, 0, 0);
  }

  return next.getTime() - now.getTime();
};

export const useTimeOfDayTheme = () => {
  useEffect(() => {
    applyTimeOfDayTheme();

    let timeoutId = window.setTimeout(function tick() {
      applyTimeOfDayTheme();
      timeoutId = window.setTimeout(tick, msUntilNextSwitch());
    }, msUntilNextSwitch());

    return () => window.clearTimeout(timeoutId);
  }, []);
};
