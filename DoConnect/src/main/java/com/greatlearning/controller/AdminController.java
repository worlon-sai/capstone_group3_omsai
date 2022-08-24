package com.greatlearning.controller;

import com.greatlearning.Dto.ServerResponse;
import com.greatlearning.entities.User;
import com.greatlearning.services.AnswerServiceImpl;
import com.greatlearning.services.QuestionService;
import com.greatlearning.services.UserService;

import java.util.List;

import org.hibernate.id.IntegralDataTypeHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private QuestionService questionService;
    @Autowired
    private AnswerServiceImpl answerService;
    @Autowired
    private UserService userservice;

    @PostMapping("/approveQuestion/{qid}")
    ServerResponse approveQuestion(@PathVariable("qid") int qid) {
        return questionService.approveQuestion(qid);
    }

    @PostMapping("/approveAnswer/{aid}")
    ServerResponse approveAnswer(@PathVariable("aid") int aid) {
        return answerService.approveAnswer(aid);
    }
    

    @DeleteMapping("/deleteQuestion/{qid}")
    ServerResponse deleteQuestion(@PathVariable("qid") String qids) {
    	System.out.println(qids);
    	String[] splitted=qids.split(",");
    	int qid=Integer.parseInt(splitted[0]);
        return questionService.deleteQuestion(qid,splitted[1]);
    }

    @DeleteMapping("/deleteAnswer/{aid}")
    ServerResponse deleteAnswer(@PathVariable("aid") String aids) {
    	String[] splitted=aids.split(",");
    	int aid=Integer.parseInt(splitted[0]);
        return answerService.deleteAnswer(aid,splitted[1]);
    }
    @GetMapping("/getAllUsers")
	public List<User> getAll() {
    	System.out.println("getallusers");
		return userservice.getAll();
	}
}
