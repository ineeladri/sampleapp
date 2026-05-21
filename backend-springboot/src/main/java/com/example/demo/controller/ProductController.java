package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ProductController {

    @GetMapping("/products")
    public List<Map<String, Object>> getProducts() {

        return List.of(

            Map.of(
                "id", 1,
                "name", "Gaming Laptop",
                "description", "High performance laptop for gaming",
                "price", 85000
            ),

            Map.of(
                "id", 2,
                "name", "Wireless Headphones",
                "description", "Noise cancelling bluetooth headphones",
                "price", 4500
            ),

            Map.of(
                "id", 3,
                "name", "Smart Watch",
                "description", "Fitness tracking smartwatch",
                "price", 7000
            ),

            Map.of(
                "id", 4,
                "name", "Mobile Phone",
                "description", "Android 5G smartphone",
                "price", 25000
            ),

            Map.of(
                "id", 5,
                "name", "Bluetooth Speaker",
                "description", "Portable wireless speaker",
                "price", 3500
            )
        );
    }
}