#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")] // Do not show terminal in release version on Windows

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
