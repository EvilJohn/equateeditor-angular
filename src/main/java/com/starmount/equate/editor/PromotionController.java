package com.starmount.equate.editor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/promotions")
public class PromotionController {

	@Autowired
	private PromotionRepository repo;

	@RequestMapping(method = RequestMethod.GET)
	public List<Promotion> findPromotions() {
		return repo.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public Promotion addPromotion(@RequestBody Promotion promotion) {
		System.out.println("POSTING PROMOTION");
		promotion.setId(null);
		return repo.saveAndFlush(promotion);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Promotion updatePromotion(@RequestBody Promotion updatedPromotion,
			@PathVariable Integer id) {
		updatedPromotion.setId(id);
		return repo.saveAndFlush(updatedPromotion);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deletePromotion(@PathVariable Integer id) {
		repo.delete(id);
	}
}
