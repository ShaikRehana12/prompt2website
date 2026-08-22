package com.prompt2website.backend.controller;

import com.prompt2website.backend.model.ProjectRequest;
import com.prompt2website.backend.service.ProjectGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map; // <-- Add this import

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    @Autowired
    private ProjectGeneratorService generatorService;

    @PostMapping("/generate")
    public ResponseEntity<?> generateProject(@RequestBody ProjectRequest request) {
        if (request.getPrompt() == null || request.getPrompt().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Prompt cannot be empty!"));
        }

        var result = generatorService.generateProjectStructure(request);
        return ResponseEntity.ok(result);
    }
}