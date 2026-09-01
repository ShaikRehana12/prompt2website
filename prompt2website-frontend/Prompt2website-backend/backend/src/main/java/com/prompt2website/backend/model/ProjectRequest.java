package com.prompt2website.backend.model;

public class ProjectRequest {
    private String userId;
    private String projectName;
    private String prompt;
    private String frontend;
    private String backend;
    private String database;

    // Constructors
    public ProjectRequest() {}

    public ProjectRequest(String userId, String projectName, String prompt, String frontend, String backend, String database) {
        this.userId = userId;
        this.projectName = projectName;
        this.prompt = prompt;
        this.frontend = frontend;
        this.backend = backend;
        this.database = database;
    }

    // Getters and Setters
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getProjectName() { return projectName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }

    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }

    public String getFrontend() { return frontend; }
    public void setFrontend(String frontend) { this.frontend = frontend; }

    public String getBackend() { return backend; }
    public void setBackend(String backend) { this.backend = backend; }

    public String getDatabase() { return database; }
    public void setDatabase(String database) { this.database = database; }
}