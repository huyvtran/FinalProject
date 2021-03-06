package com.skilldistillery.qrx.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class UserTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private User user;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("qrxpu");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		user = em.find(User.class, 1);

	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		user = null;
	}

	@Test
	@DisplayName("User Mappings Test")
	void test_intital_user_mappings() {
		assertNotNull(user);
		assertEquals("dmaunit23", user.getUsername());
		assertEquals("test", user.getPassword());
		assertEquals(true, user.getActive());
		assertEquals("ems", user.getRole());
		assertEquals("2019-08-14 12:27:52.0", user.getCreateDate().toString());
	}
	
	@Test
	@DisplayName("User to Provider Mappings")
	void test_intitial_provider_mappings() {
		assertEquals("Denver Metro Ambulance", user.getProvider().getOrganization());
		assertEquals("Unit 23", user.getProvider().getSubunit());
	}
}
