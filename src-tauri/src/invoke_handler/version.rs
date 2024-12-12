use shadow_rs::shadow;
shadow!(build);

#[tauri::command]
pub fn version() -> String {
    // println!("debug:{}", shadow_rs::is_debug()); // check if this is a debug build. e.g 'true/false'
    // println!("branch:{}", shadow_rs::branch()); // get current project branch. e.g 'master/develop'
    // println!("tag:{}", shadow_rs::tag()); // get current project tag. e.g 'v1.3.5'
    // println!("git_clean:{}", shadow_rs::git_clean()); // get current project clean. e.g 'true/false'
    // println!("git_status_file:{}", shadow_rs::git_status_file()); // get current project statue file. e.g '  * examples/builtin_fn.rs (dirty)'

    // println!("{}", build::VERSION); //print version const
    // println!("{}", build::CLAP_LONG_VERSION); //print CLAP_LONG_VERSION const
    // println!("{}", build::BRANCH); //master
    // println!("{}", build::SHORT_COMMIT); //8405e28e
    // println!("{}", build::COMMIT_HASH); //8405e28e64080a09525a6cf1b07c22fcaf71a5c5
    // println!("{}", build::COMMIT_DATE); //2021-08-04 12:34:03 +00:00
    // println!("{}", build::COMMIT_AUTHOR); //baoyachi
    // println!("{}", build::COMMIT_EMAIL); //xxx@gmail.com

    // println!("{}", build::BUILD_OS); //macos-x86_64
    // println!("{}", build::RUST_VERSION); //rustc 1.45.0 (5c1f21c3b 2020-07-13)
    // println!("{}", build::RUST_CHANNEL); //stable-x86_64-apple-darwin (default)
    // println!("{}", build::CARGO_VERSION); //cargo 1.45.0 (744bd1fbb 2020-06-15)
    // println!("{}", build::PKG_VERSION); //0.3.13
    // println!("{}", build::CARGO_TREE); //like command:cargo tree
    // println!("{}", build::CARGO_MANIFEST_DIR); // /User/baoyachi/shadow-rs/ |

    // println!("{}", build::PROJECT_NAME); //shadow-rs
    // println!("{}", build::BUILD_TIME); //2020-08-16 14:50:25
    // println!("{}", build::BUILD_RUST_CHANNEL); //debug
    // println!("{}", build::GIT_CLEAN); //false
    // println!("{}", build::GIT_STATUS_FILE); //* src/lib.rs (dirty)

    format!("{} {}", build::PKG_VERSION, build::SHORT_COMMIT)
}
