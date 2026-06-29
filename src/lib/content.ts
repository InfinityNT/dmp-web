export const site = {
  name: "DMP",
  full: "Device Management Platform",
  tagline: "Know every device. And who has it.",
  sub: "A self-hosted platform to track your IT assets, the people who use them, and the full history of who had what — with approvals, reports, and instant search. Runs on your own machine. No cloud required.",
  repo: "https://github.com/InfinityNT/it",
  version: "v1.0",
  specChips: ["Self-hosted", "Django + SQLite", "Windows · macOS · Linux", "⌘K search"],
};

export type Feature = {
  title: string;
  body: string;
  icon: string; // lucide icon name
  span?: "wide" | "tall"; // bento sizing
  tag: string;
};

export const features: Feature[] = [
  { title: "Device tracking", body: "Every asset with its tag, serial, specs, status and location — auto-generated asset tags included.", icon: "Laptop", span: "wide", tag: "DEVICES" },
  { title: "Command palette", body: "Press ⌘/Ctrl + K anywhere to jump to any page, run an action, or search across devices, people and assignments.", icon: "Command", span: "tall", tag: "⌘K" },
  { title: "Employee records", body: "People, departments and the kit assigned to each — with department responsibles for shared gear.", icon: "Users", tag: "PEOPLE" },
  { title: "Assignments", body: "Issue, return and transfer devices with full history and expected-return tracking.", icon: "ArrowLeftRight", tag: "ASSIGN" },
  { title: "Approvals", body: "A review step before sensitive actions take effect — request, approve, done.", icon: "CircleCheck", tag: "REVIEW" },
  { title: "Reports & analytics", body: "Live charts plus a custom report builder exporting CSV, JSON, PDF and Excel.", icon: "ChartColumn", span: "wide", tag: "INSIGHT" },
  { title: "Runs as a service", body: "Install once and it starts at boot — a native service on Windows, macOS and Linux.", icon: "Server", tag: "SERVICE" },
  { title: "Self-hosted, no cloud", body: "Your data stays on your network. SQLite-backed, with consistent online backups built in.", icon: "ShieldCheck", tag: "ON-PREM" },
];

export type Shot = { src: string; title: string; tag: string; blurb: string };

export const shots: Shot[] = [
  { src: "/screenshots/dashboard.png", title: "Dashboard", tag: "DMP-DASH-01", blurb: "Quick actions, search and an at-a-glance overview." },
  { src: "/screenshots/cmdk.png", title: "Command palette", tag: "DMP-CMDK-02", blurb: "Find anything with ⌘K — pages, actions and records." },
  { src: "/screenshots/reports.png", title: "Reports & analytics", tag: "DMP-RPT-03", blurb: "Distribution, status, trends and a custom builder." },
  { src: "/screenshots/devices.png", title: "Device inventory", tag: "DMP-DEV-04", blurb: "Search, filter and open any device's full record." },
  { src: "/screenshots/assign_device.png", title: "Assign a device", tag: "DMP-ASN-05", blurb: "Individual or shared, with purpose and return date." },
  { src: "/screenshots/settings.png", title: "Settings", tag: "DMP-SET-06", blurb: "Security, sessions, backups and data integrity." },
];

export const install: { os: string; tag: string; lines: string[] }[] = [
  { os: "Windows", tag: "WIN", lines: ["# Run install.bat as Administrator", "install.bat", "", "# …or register the service directly:", "python dmpctl.py install"] },
  { os: "macOS / Linux", tag: "NIX", lines: ["./install.sh", "", "# manage the service anytime:", "python dmpctl.py status"] },
];

export const downloads: { os: string; icon: string; tag: string; note: string; file: string }[] = [
  { os: "Windows", icon: "MonitorDown", tag: "WIN-X64", note: "Installer · runs as a Windows service", file: "DMP-Setup.exe" },
  { os: "macOS", icon: "Apple", tag: "MACOS", note: "Disk image · launchd service", file: "DMP-macos.dmg" },
  { os: "Linux", icon: "Terminal", tag: "LINUX", note: "AppImage · systemd unit", file: "DMP-linux-x86_64.AppImage" },
];

// Per-OS installers are published as GitHub Release assets by the it repo's
// "Build installers" workflow (tag a vX.Y.Z to produce them).
export const releaseAsset = (file: string) =>
  `${site.repo}/releases/latest/download/${file}`;
