import React from 'react';
import { Tv, MonitorSmartphone, Flame, Box, Smartphone, Laptop } from 'lucide-react';
import type { Device } from '../data/devices';

const MAP = { tv: Tv, android: MonitorSmartphone, fire: Flame, box: Box, phone: Smartphone, laptop: Laptop };

export function DeviceIcon({ icon, className = 'w-6 h-6' }: { icon: Device['icon']; className?: string }) {
  const Icon = MAP[icon];
  return <Icon className={className} />;
}
