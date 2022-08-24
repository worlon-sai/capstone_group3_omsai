package com.greatlearning.repos;

import com.greatlearning.model.Chat;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ChatRepos extends JpaRepository<Chat,Integer> {
	@Query(value = "select * from chat where qid=?1",nativeQuery = true)
    List<Chat> findByQid(int qid);

}
