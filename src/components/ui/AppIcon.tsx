import React from 'react';

import {
  Wallet,
  Send,
  Download,
  Settings,
  History,
  Copy,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Eye,
  EyeOff,
  Shield,
  QrCode,
  Bitcoin,
  type LucideIcon,
} from 'lucide-react-native';

import { colors } from '../../theme';

const icons = {
  wallet: Wallet,
  send: Send,
  receive: Download,
  settings: Settings,
  history: History,
  copy: Copy,
  check: Check,
  close: X,
  back: ChevronLeft,
  next: ChevronRight,
  plus: Plus,
  search: Search,
  eye: Eye,
  eyeOff: EyeOff,
  security: Shield,
  qr: QrCode,
  bitcoin: Bitcoin,
} satisfies Record<string, LucideIcon>;

export type AppIconName = keyof typeof icons;

interface AppIconProps {
  name: AppIconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function AppIcon({
  name,
  size = 24,
  color = colors.primaryText,
  strokeWidth = 2,
}: AppIconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
}