#[tauri::command]
pub fn version() -> String {
    env!("CARGO_PKG_VERSION").into()
}