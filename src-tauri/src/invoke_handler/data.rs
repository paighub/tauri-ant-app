use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Item {
    id: u32,
    name: String,
    age: u8,
    phone: String,
    address: String,
}

#[tauri::command]
pub fn data_get() -> Vec<Item> {
    let mut items = Vec::new();
    for i in 0..100 {
        items.push(Item {
            id: i,
            name: format!("name{}", i),
            age: i as u8,
            phone: format!("phone{}", i),
            address: format!("address{}", i),
        });
    }
    items
}
