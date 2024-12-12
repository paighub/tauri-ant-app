fn main() -> shadow_rs::SdResult<()> {
    tauri_build::build();

    shadow_rs::new()
}
