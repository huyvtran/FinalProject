package com.skilldistillery.qrx.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.qrx.entities.Patient;
import com.skilldistillery.qrx.entities.PersonalNote;
import com.skilldistillery.qrx.services.NoteService;
import com.skilldistillery.qrx.services.PatientService;

@RestController
@RequestMapping(path = "api/patients/")
@CrossOrigin({ "*", "http://localhost:4205" })
public class NoteController {
	
	@Autowired
	private PatientService patientSvc;

	@Autowired
	private NoteService svc;
	
//	LIST	GET		List Notes by PID
	@GetMapping(path = "{pid}/notes/")
	public List<PersonalNote> getNotes(@PathVariable Integer pid) {
		return svc.getNotes(pid);
	}

//	READ	GET	 Show PersonalNote by NID
	@GetMapping(path = "{pid}/notes/{nid}/")
	public PersonalNote getNoteById(@PathVariable Integer pid, @PathVariable Integer nid, HttpServletResponse resp) {

		PersonalNote note = svc.getByPatient_IdAndNote_Id(pid, nid);

		if (note == null) {
			resp.setStatus(404);
			return null;
		}

		return note;
	}

//	DELETE	DELETE	Delete PersonalNote
	@DeleteMapping("{pid}/notes/{nid}/")
	public Boolean deleteNote(@PathVariable Integer pid, @PathVariable Integer nid, HttpServletRequest req, HttpServletResponse resp) {
		PersonalNote note = svc.getByPatient_IdAndNote_Id(pid, nid);
		if (note != null) {
			try {
				svc.delete(nid);
				return true;
			} catch (Exception e) {
				resp.setStatus(409);
			}
		}
		return false;
	}

// CREATE   PUT     Add PersonalNote	
	@PostMapping("{pid}/notes/")
	public PersonalNote createNote(@PathVariable Integer pid, @RequestBody PersonalNote note, HttpServletRequest req, HttpServletResponse resp) {
		if (note.getPatient() == null) {
			Patient patient = patientSvc.findByPatient_Id(pid);
			try {
				note.setPatient(patient);
				svc.create(pid, note);
				resp.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/");
				url.append(note.getId());
				String newAddrURL = url.toString();
				resp.addHeader("Location", newAddrURL);
			} catch (Exception e) {
				resp.setStatus(400);
				note = null;
			}
		}
		return note;
	}

//	UPDATE	PUT	{pid}/noted/{nid}	Update PersonalNote
	@PutMapping("{pid}/notes/{nid}/")
	public PersonalNote replaceNote(@PathVariable Integer pid, @RequestBody PersonalNote note, HttpServletRequest req, HttpServletResponse resp) {
		try {
			note = svc.update(pid, note);
			resp.setStatus(200);
			StringBuffer url = req.getRequestURL();
			String newAddrURL = url.toString();
			resp.addHeader("URL", newAddrURL);
		} catch (Exception e) {
			resp.setStatus(400);
			note = null;
		}
		return note;
	}
}