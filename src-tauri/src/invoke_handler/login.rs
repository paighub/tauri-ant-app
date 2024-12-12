#[tauri::command]
pub fn login(user: &str, password: &str) -> bool {
    println!("login {user} {password}");
    match (user, password) {
        ("tauri", "admin") => true,
        _ => false,
    }
}
