mod invoke_handler;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(|invoke| {
            invoke_handler::handler()(invoke)
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
