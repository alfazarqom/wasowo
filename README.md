# Wasowo — E-Commerce Storefront UI Prototype

Prototype struktur aplikasi berdasarkan **E-Commerce Storefront UI Page Architecture V1.1**.

## Struktur utama
- **AppShell**: Header, MainPage (19 halaman), Footer bersama, BottomNavigation.
- **Standalone**: Header, StandalonePage (11 halaman termasuk NotFoundPage), Footer bersama, BottomActionBar.
- **Overlays**: placeholder global untuk Modal, Drawer, BottomSheet, SearchOverlay, LoadingOverlay, dan ToastNotification.

## Aturan Footer V1.1
Footer dirender satu kali pada masing-masing layout. Semua halaman dalam layout tersebut menggunakan Footer bersama; tidak ada Footer duplikat di dalam Page.

## Scope prototype
Semua Page masih berupa placeholder. Tidak ada implementasi fitur bisnis, backend, autentikasi, pembayaran, atau integrasi API.

## Menjalankan
```bash
npm install
npm run dev
npm run build
```
