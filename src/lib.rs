mod utils;

use getrandom::getrandom;
use wasm_bindgen::prelude::*;
// use js_sys::Array;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct Point2D {
    x: i32,
    y: i32,
}

#[wasm_bindgen]
impl Point2D {
    #[wasm_bindgen(constructor)]
    pub fn new(x: i32, y: i32) -> Point2D {
        Point2D { x, y }
    }

    #[wasm_bindgen(getter)]
    pub fn x(&self) -> i32 {
        self.x
    }

    #[wasm_bindgen(getter)]
    pub fn y(&self) -> i32 {
        self.y
    }

    #[wasm_bindgen(setter)]
    pub fn set_field(&mut self, x: i32, y: i32) {
        self.x = x;
        self.y = y;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasmtest!");
}

// #[wasm_bindgen]
// pub fn shake_points(points: Box<[JsValue]>) -> Box<[Point2D]> {
//     JsValue::from_serde(points.iter().map(|p| {
//         return Point2D::new(getrandom(), getrandom());
//     })).unwrap()
// }


pub fn shake_points(points: Box<[JsValue]>) -> Box<[Point2D]> {
    JsValue::from_serde(points.iter().map(|p| {
        return Point2D::new(getrandom(), getrandom());
    }).collect())
}