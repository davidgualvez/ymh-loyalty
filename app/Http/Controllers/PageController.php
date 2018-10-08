<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    //
	 public function login(){
    	return view('login');
    }

    public function dashboard(){
    	return view('pages.dashboard');
    }

    public function createReward(){
    	return view('pages.create_reward');
    }

    public function forShipment(){
    	return view('pages.for_shipment');
    }

    public function forShipmentItem(){
    	return view('pages.for_shipment_item');
    }

    public function forShipmentItemSent(){
    	return view('pages.for_shipment_item_sent');
    }

    public function rewards(){
    	return view('pages.rewards');
    }

    public function redemption(){
    	return view('pages.redemption');
    }

    public function redeemed(){
    	return view('pages.redeemed');
    }

    public function eventsReward(){
    	return view('pages.events_reward');
    }
    
}
