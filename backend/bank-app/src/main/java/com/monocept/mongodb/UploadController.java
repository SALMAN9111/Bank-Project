package com.monocept.mongodb;

import java.io.IOException;
import java.util.Date;

import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping
public class UploadController {
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	@PostMapping(value = "/file/uploadImage")
	@ResponseBody
	public ResponseEntity<?> uploadImage(@RequestParam(value = "image") MultipartFile file){
		if(file.isEmpty()) {
			System.out.println("fie is empty");
			return ResponseEntity.badRequest().build();
		}
		
		String fileName = file.getOriginalFilename();
		System.out.println("Image name "+fileName);
		
		try {
			UploadFile uploadFile = new UploadFile();
			uploadFile.setName(fileName);
			uploadFile.setCreatedTime(new Date());
			uploadFile.setContent(new Binary(file.getBytes()));
			uploadFile.setContentType(file.getContentType());
			uploadFile.setSize(file.getSize());
			
			UploadFile savedFile = mongoTemplate.save(uploadFile);
			String url = "http://localhost:8111/file/image/"+savedFile.getId();
			
			return ResponseEntity.ok("image uploaded successfully "+url);
		}
		catch (IOException e) {
			return ResponseEntity.status(501).build();
		}
	}
	
	@GetMapping(value = "/file/image/{id}", produces = {org.springframework.http.MediaType.IMAGE_JPEG_VALUE,org.springframework.http.MediaType.IMAGE_PNG_VALUE})
	@ResponseBody
	public byte[] image(@PathVariable String id) {
		byte[] data = null;
		UploadFile file = mongoTemplate.findById(id, UploadFile.class);
		if(file!=null) {
			data = file.getContent().getData();
		}
		return data;
	}
}
