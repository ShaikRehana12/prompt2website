package com.prompt2website.backend.repository;

import com.prompt2website.backend.model.GeneratedProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<GeneratedProject, Long> {
}