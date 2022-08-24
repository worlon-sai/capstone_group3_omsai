package com.greatlearning.controller;

import com.greatlearning.model.Chat;
import com.greatlearning.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/chat")
public class ChatController {
    @Autowired
    private ChatService chatService;
    
    @PostMapping("/post")
    public Chat sendMsg(@RequestBody Chat chat){
        return chatService.send(chat);

    }

    @PostMapping("/post1")
    public Chat sendMsg1(@RequestBody Chat chat){
        return chatService.send1(chat);

    }

    @GetMapping("/get")
    public List<Chat> get(){
        return chatService.get();
    }
    
    @GetMapping("/get1/{qid}")
    public List<Chat> get1(@PathVariable("qid") int qid){
    	System.out.println(qid);
        return chatService.get1(qid);
    }
}
