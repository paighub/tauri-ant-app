mod login;
mod version;

pub fn handler<R: tauri::Runtime>() -> Box<dyn Fn(tauri::ipc::Invoke<R>) -> bool> {
    Box::new(tauri::generate_handler![version::version, login::login])
}
