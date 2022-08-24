package com.greatlearning.service;

import com.greatlearning.model.Chat;
import com.greatlearning.repos.ChatRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatRepos chatRepos;

    public Chat send(Chat chat){
        Chat chat1=new Chat();
        chat1.setUsername(chat.getUsername());
        chat1.setMessage(chat.getMessage());
        chat1.setQid(0);
        chatRepos.save(chat1);
        return chat1;

    }
    
    public Chat send1(Chat chat){
        Chat chat1=new Chat();
        chat1.setUsername(chat.getUsername());
        chat1.setMessage(chat.getMessage());
        if(chat.getQid()>0)
        chat1.setQid(chat.getQid());
        else {
        	chat1.setQid(0);
        }
        chatRepos.save(chat1);
        return chat1;

    }
    public List<Chat> get1(int qid){
        List<Chat> chats=chatRepos.findByQid(qid);
        return chats;
    }
    
    public List<Chat> get()
    {
    	List<Chat> chats=chatRepos.findByQid(0);
    	return chats;
    }
}
