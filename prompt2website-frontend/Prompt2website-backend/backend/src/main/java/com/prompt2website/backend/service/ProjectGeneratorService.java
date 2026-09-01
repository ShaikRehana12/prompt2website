package com.prompt2website.backend.service;

import com.prompt2website.backend.model.GeneratedProject;
import com.prompt2website.backend.model.ProjectRequest;
import com.prompt2website.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProjectGeneratorService {

    @Autowired
    private ProjectRepository projectRepository;

    public Map<String, Object> generateProjectStructure(ProjectRequest request) {
        // 1. Save to database for history tracking (incorporating userId and projectName if provided)
        GeneratedProject savedProject = new GeneratedProject();
        savedProject.setPrompt(request.getPrompt());
        savedProject.setFrontend(request.getFrontend());
        savedProject.setBackend(request.getBackend());
        savedProject.setDatabase(request.getDatabase());
        
        // Save user reference if available in the updated request model
        if (request.getUserId() != null) {
            savedProject.setUserId(request.getUserId());
        }
        
        projectRepository.save(savedProject);

        // 2. Build the response structure
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("status", "SUCCESS");
        response.put("message", "Project code and structure generated successfully!");
        response.put("projectId", savedProject.getId());
        
        // Use custom project name from request if given, otherwise fall back to generated name
        String finalProjectName = (request.getProjectName() != null && !request.getProjectName().isEmpty()) 
            ? request.getProjectName() 
            : "Generated-App-" + savedProject.getId();
            
        response.put("projectName", finalProjectName);
        response.put("selectedFrontend", request.getFrontend());
        response.put("selectedBackend", request.getBackend());
        response.put("selectedDatabase", request.getDatabase());

        // 3. Generate a dynamic file tree based on user selections
        List<Map<String, String>> fileTree = new ArrayList<>();
        
        // Frontend files (Angular standalone architecture support)
        if ("Angular".equalsIgnoreCase(request.getFrontend())) {
            fileTree.add(Map.of("path", "frontend/src/app/app.component.ts", "type", "file"));
            fileTree.add(Map.of("path", "frontend/src/app/app.component.html", "type", "file"));
            fileTree.add(Map.of("path", "frontend/src/app/app.config.ts", "type", "file"));
            fileTree.add(Map.of("path", "frontend/angular.json", "type", "file"));
        }
        
        // Backend files (Spring Boot)
        if ("Spring Boot".equalsIgnoreCase(request.getBackend())) {
            fileTree.add(Map.of("path", "backend/src/main/java/com/prompt2website/backend/BackendApplication.java", "type", "file"));
            fileTree.add(Map.of("path", "backend/src/main/resources/application.properties (" + request.getDatabase() + " Setup)", "type", "file"));
            fileTree.add(Map.of("path", "backend/pom.xml", "type", "file"));
        }

        response.put("structure", fileTree);
        return response;
    }
}