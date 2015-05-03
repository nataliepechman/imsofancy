$(document).scroll(function(){ 

	// header moves down when scrolling past intro paragraph

	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y>430) {
		$("#header").css("position", "fixed");
		$("#header").css("top", "-10px");
		$("#header").css("margin-left", "34px");
		$("#header").css("left", "6%");
		$("#header").css("z-index", "1");
		$("#header").css("border-bottom", "1pt #d2a12c solid");
		$("#header").css("padding-bottom", "30px");
		$("#title").css("width", "70%");
		$("#sort-nav").fadeIn("fast");
	}

	else {
		$("#header").css("position", "relative");
		$("#header").css("top", "0px");
		$("#header").css("left", "0px");
		$("#header").css("z-index", "1");
		$("#header").css("border-bottom", "none");
		$("#header").css("padding-bottom", "0px");
		$("#title").css("width", "1100px");
		$("#sort-nav").fadeOut("fast");
	}

	});

$(document).ready(function() {

	// sort button drop-down

	$("#sort-nav").click(function() {
		$("#options").fadeToggle("fast");
	});

	// mix it up plugin

	$(function(){
		$('#mix').mixItUp();
	});

	// sort alphabetically

	$("#a2z").click(function() {
	var mylist = $('#sort-list');
	var listitems = mylist.children('div').get();
	listitems.sort(function(a, b) {
   var compA = $(a).text().toUpperCase();
   var compB = $(b).text().toUpperCase();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	})
	$.each(listitems, function(idx, itm) { mylist.append(itm); }); });

	$("#z2a").click(function() {
	var mylist = $('#sort-list');
	var listitems = mylist.children('div').get();
	listitems.sort(function(b, a) {
   var compA = $(a).text().toUpperCase();
   var compB = $(b).text().toUpperCase();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	})
	$.each(listitems, function(idx, itm) { mylist.append(itm); }); });

	// scroll to top button

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('#scroll2top').fadeIn('slow');
		}

		else {
			$('#scroll2top').fadeOut('slow');
		}
	});

	// *********************** open pop-up boxes

	// Tendentious

	$("#tendentious-word").click(function() {
		$("#tendentious-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Aureate

	$("#aureate-word").click(function() {
		$("#aureate-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Encomium

	$("#encomium-word").click(function() {
		$("#encomium-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Haberdasher

	$("#haberdasher-word").click(function() {
		$("#haberdasher-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Aubade

	$("#aubade-word").click(function() {
		$("#aubade-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Scintillant

	$("#scintillant-word").click(function() {
		$("#scintillant-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Schadenfreude

	$("#schadenfreude-word").click(function() {
		$("#schadenfreude-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Soubrette

	$("#soubrette-word").click(function() {
		$("#soubrette-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Autochthonous

	$("#autochthonous-word").click(function() {
		$("#autochthonous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Cymotrichous

	$("#cymotrichous-word").click(function() {
		$("#cymotrichous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Lethologica

	$("#lethologica-word").click(function() {
		$("#lethologica-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Chimerical

	$("#chimerical-word").click(function() {
		$("#chimerical-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Punctilious

	$("#punctilious-word").click(function() {
		$("#punctilious-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Pulchritudinous

	$("#pulchritudinous-word").click(function() {
		$("#pulchritudinous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Loquacious

	$("#loquacious-word").click(function() {
		$("#loquacious-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Winnow

	$("#winnow-word").click(function() {
		$("#winnow-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Succorance

	$("#succorance-word").click(function() {
		$("#succorance-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Tenebrific

	$("#tenebrific-word").click(function() {
		$("#tenebrific-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Epistolize

	$("#epistolize-word").click(function() {
		$("#epistolize-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Commensal

	$("#commensal-word").click(function() {
		$("#commensal-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Sternutation

	$("#sternutation-word").click(function() {
		$("#sternutation-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Skookum

	$("#skookum-word").click(function() {
		$("#skookum-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Pigsney

	$("#pigsney-word").click(function() {
		$("#pigsney-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Dowie

	$("#dowie-word").click(function() {
		$("#dowie-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Stour

	$("#stour-word").click(function() {
		$("#stour-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Sodality

	$("#sodality-word").click(function() {
		$("#sodality-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Verbigeration

	$("#verbigeration-word").click(function() {
		$("#verbigeration-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Thalassic

	$("#thalassic-word").click(function() {
		$("#thalassic-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Subfuscous

	$("#subfuscous-word").click(function() {
		$("#subfuscous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Larrikin

	$("#larrikin-word").click(function() {
		$("#larrikin-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Frenetic

	$("#frenetic-word").click(function() {
		$("#frenetic-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Oeuvre

	$("#oeuvre-word").click(function() {
		$("#oeuvre-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Crapehanger

	$("#crapehanger-word").click(function() {
		$("#crapehanger-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Horology

	$("#horology-word").click(function() {
		$("#horology-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Pusillanimous

	$("#pusillanimous-word").click(function() {
		$("#pusillanimous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Anatine

	$("#anatine-word").click(function() {
		$("#anatine-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Hoyden

	$("#hoyden-word").click(function() {
		$("#hoyden-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Bovarism

	$("#bovarism-word").click(function() {
		$("#bovarism-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Pabulum

	$("#pabulum-word").click(function() {
		$("#pabulum-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Tiffin

	$("#tiffin-word").click(function() {
		$("#tiffin-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Juvenescent

	$("#juvenescent-word").click(function() {
		$("#juvenescent-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Mythomane

	$("#mythomane-word").click(function() {
		$("#mythomane-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Exiguous

	$("#exiguous-word").click(function() {
		$("#exiguous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Calvous

	$("#calvous-word").click(function() {
		$("#calvous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Flapdoodle

	$("#flapdoodle-word").click(function() {
		$("#flapdoodle-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Galoot

	$("#galoot-word").click(function() {
		$("#galoot-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Gloaming

	$("#gloaming-word").click(function() {
		$("#gloaming-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Interrobang

	$("#interrobang-word").click(function() {
		$("#interrobang-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Taradiddle

	$("#taradiddle-word").click(function() {
		$("#taradiddle-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Camelopard

	$("#camelopard-word").click(function() {
		$("#camelopard-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Klatsch

	$("#klatsch-word").click(function() {
		$("#klatsch-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Equanimity

	$("#equanimity-word").click(function() {
		$("#equanimity-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Brusque

	$("#brusque-word").click(function() {
		$("#brusque-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Desiderium

	$("#desiderium-word").click(function() {
		$("#desiderium-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Serein

	$("#serein-word").click(function() {
		$("#serein-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Crinose

	$("#crinose-word").click(function() {
		$("#crinose-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Sweven

	$("#sweven-word").click(function() {
		$("#sweven-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Osculate

	$("#osculate-word").click(function() {
		$("#osculate-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Estivate

	$("#estivate-word").click(function() {
		$("#estivate-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Gibbosity

	$("#gibbosity-word").click(function() {
		$("#gibbosity-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Prate

	$("#prate-word").click(function() {
		$("#prate-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Prevaricator

	$("#prevaricator-word").click(function() {
		$("#prevaricator-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Blithesome

	$("#blithesome-word").click(function() {
		$("#blithesome-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Clement

	$("#clement-word").click(function() {
		$("#clement-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Tarantism

	$("#tarantism-word").click(function() {
		$("#tarantism-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Malinger

	$("#malinger-word").click(function() {
		$("#malinger-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Boîte

	$("#boîte-word").click(function() {
		$("#boîte-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Somnolent

	$("#somnolent-word").click(function() {
		$("#somnolent-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Intractable

	$("#intractable-word").click(function() {
		$("#intractable-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Apogee

	$("#apogee-word").click(function() {
		$("#apogee-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Cynosure

	$("#cynosure-word").click(function() {
		$("#cynosure-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Sobriquet

	$("#sobriquet-word").click(function() {
		$("#sobriquet-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Antediluvian

	$("#antediluvian-word").click(function() {
		$("#antediluvian-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Parvenu

	$("#parvenu-word").click(function() {
		$("#parvenu-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Quotidian

	$("#quotidian-word").click(function() {
		$("#quotidian-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Maudlin

	$("#maudlin-word").click(function() {
		$("#maudlin-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Moiety

	$("#moiety-word").click(function() {
		$("#moiety-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Felicitous

	$("#felicitous-word").click(function() {
		$("#felicitous-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Nugatory

	$("#nugatory-word").click(function() {
		$("#nugatory-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Nosegay

	$("#nosegay-word").click(function() {
		$("#nosegay-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Quagmire

	$("#quagmire-word").click(function() {
		$("#quagmire-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Magniloquent

	$("#magniloquent-word").click(function() {
		$("#magniloquent-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Menagerie

	$("#menagerie-word").click(function() {
		$("#menagerie-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Ennui

	$("#ennui-word").click(function() {
		$("#ennui-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Sybarite

	$("#sybarite-word").click(function() {
		$("#sybarite-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});

	// Diablerie

	$("#diablerie-word").click(function() {
		$("#diablerie-def").fadeIn("fast");
		$("#top-right").fadeIn("fast");
		$("html").css("background-color", "#f8eacf");
		$("#header").css("background-color", "#f8eacf");
	});


	// ************************ close pop-up boxes

	$("#top-right").click(function() {
		$("#top-right").fadeOut("fast");
		$("html").css("background-color", "#fff");
		$("#header").css("background-color", "#fff");
	});

	// Tendentious

	$("#top-right").click(function() {
		$("#tendentious-def").fadeOut("fast");
	});

	// Aureate

	$("#top-right").click(function() {
		$("#aureate-def").fadeOut("fast");
	});

	// Encomium

	$("#top-right").click(function() {
		$("#encomium-def").fadeOut("fast");
	});

	// Haberdasher

	$("#top-right").click(function() {
		$("#haberdasher-def").fadeOut("fast");
	});

	// Aubade

	$("#top-right").click(function() {
		$("#aubade-def").fadeOut("fast");
	});

	// Scintillant

	$("#top-right").click(function() {
		$("#scintillant-def").fadeOut("fast");
	});

	// Schadenfreude

	$("#top-right").click(function() {
		$("#schadenfreude-def").fadeOut("fast");
	});

	// Soubrette

	$("#top-right").click(function() {
		$("#soubrette-def").fadeOut("fast");
	});

	// Autochthonous

	$("#top-right").click(function() {
		$("#autochthonous-def").fadeOut("fast");
	});

	// Cymotrichous

	$("#top-right").click(function() {
		$("#cymotrichous-def").fadeOut("fast");
	});

	// Lethologica

	$("#top-right").click(function() {
		$("#lethologica-def").fadeOut("fast");
	});

	// Chimerical

	$("#top-right").click(function() {
		$("#chimerical-def").fadeOut("fast");
	});

	// Punctilious

	$("#top-right").click(function() {
		$("#punctilious-def").fadeOut("fast");
	});

	// Pulchritudinous

	$("#top-right").click(function() {
		$("#pulchritudinous-def").fadeOut("fast");
	});

	// Loquacious

	$("#top-right").click(function() {
		$("#loquacious-def").fadeOut("fast");
	});

	// Winnow

	$("#top-right").click(function() {
		$("#winnow-def").fadeOut("fast");
	});

	// Succorance

	$("#top-right").click(function() {
		$("#succorance-def").fadeOut("fast");
	});

	// Tenebrific

	$("#top-right").click(function() {
		$("#tenebrific-def").fadeOut("fast");
	});

	// Epistolize

	$("#top-right").click(function() {
		$("#epistolize-def").fadeOut("fast");
	});

	// Commensal

	$("#top-right").click(function() {
		$("#commensal-def").fadeOut("fast");
	});

	// Sternutation

	$("#top-right").click(function() {
		$("#sternutation-def").fadeOut("fast");
	});

	// Skookum

	$("#top-right").click(function() {
		$("#skookum-def").fadeOut("fast");
	});

	// Pigsney

	$("#top-right").click(function() {
		$("#pigsney-def").fadeOut("fast");
	});

	// Dowie

	$("#top-right").click(function() {
		$("#dowie-def").fadeOut("fast");
	});

	// Stour

	$("#top-right").click(function() {
		$("#stour-def").fadeOut("fast");
	});

	// Sodality

	$("#top-right").click(function() {
		$("#sodality-def").fadeOut("fast");
	});

	// Verbigeration

	$("#top-right").click(function() {
		$("#verbigeration-def").fadeOut("fast");
	});

	// Thalassic

	$("#top-right").click(function() {
		$("#thalassic-def").fadeOut("fast");
	});

	// Subfuscous

	$("#top-right").click(function() {
		$("#subfuscous-def").fadeOut("fast");
	});

	// Larrikin

	$("#top-right").click(function() {
		$("#larrikin-def").fadeOut("fast");
	});

	// Frenetic

	$("#top-right").click(function() {
		$("#frenetic-def").fadeOut("fast");
	});

	// Oeuvre

	$("#top-right").click(function() {
		$("#oeuvre-def").fadeOut("fast");
	});

	// Crapehanger

	$("#top-right").click(function() {
		$("#crapehanger-def").fadeOut("fast");
	});

	// Horology

	$("#top-right").click(function() {
		$("#horology-def").fadeOut("fast");
	});

	// Pusillanimous

	$("#top-right").click(function() {
		$("#pusillanimous-def").fadeOut("fast");
	});

	// Anatine

	$("#top-right").click(function() {
		$("#anatine-def").fadeOut("fast");
	});

	// Hoyden

	$("#top-right").click(function() {
		$("#hoyden-def").fadeOut("fast");
	});

	// Bovarism

	$("#top-right").click(function() {
		$("#bovarism-def").fadeOut("fast");
	});

	// Pabulum

	$("#top-right").click(function() {
		$("#pabulum-def").fadeOut("fast");
	});

	// Tiffin

	$("#top-right").click(function() {
		$("#tiffin-def").fadeOut("fast");
	});

	// Juvenescent

	$("#top-right").click(function() {
		$("#juvenescent-def").fadeOut("fast");
	});

	// Mythomane

	$("#top-right").click(function() {
		$("#mythomane-def").fadeOut("fast");
	});

	// Exiguous

	$("#top-right").click(function() {
		$("#exiguous-def").fadeOut("fast");
	});

	// Calvous

	$("#top-right").click(function() {
		$("#calvous-def").fadeOut("fast");
	});

	// Flapdoodle

	$("#top-right").click(function() {
		$("#flapdoodle-def").fadeOut("fast");
	});

	// Galoot

	$("#top-right").click(function() {
		$("#galoot-def").fadeOut("fast");
	});

	// Gloaming

	$("#top-right").click(function() {
		$("#gloaming-def").fadeOut("fast");
	});

	// Interrobang

	$("#top-right").click(function() {
		$("#interrobang-def").fadeOut("fast");
	});

	// Taradiddle

	$("#top-right").click(function() {
		$("#taradiddle-def").fadeOut("fast");
	});

	// Camelopard

	$("#top-right").click(function() {
		$("#camelopard-def").fadeOut("fast");
	});

	// Klatsch

	$("#top-right").click(function() {
		$("#klatsch-def").fadeOut("fast");
	});

	// Equanimity

	$("#top-right").click(function() {
		$("#equanimity-def").fadeOut("fast");
	});

	// Brusque

	$("#top-right").click(function() {
		$("#brusque-def").fadeOut("fast");
	});

	// Desiderium

	$("#top-right").click(function() {
		$("#desiderium-def").fadeOut("fast");
	});

	// Serein

	$("#top-right").click(function() {
		$("#serein-def").fadeOut("fast");
	});

	// Crinose

	$("#top-right").click(function() {
		$("#crinose-def").fadeOut("fast");
	});

	// Sweven

	$("#top-right").click(function() {
		$("#sweven-def").fadeOut("fast");
	});

	// Osculate

	$("#top-right").click(function() {
		$("#osculate-def").fadeOut("fast");
	});

	// Estivate

	$("#top-right").click(function() {
		$("#estivate-def").fadeOut("fast");
	});

	// Gibbosity

	$("#top-right").click(function() {
		$("#gibbosity-def").fadeOut("fast");
	});

	// Prate

	$("#top-right").click(function() {
		$("#prate-def").fadeOut("fast");
	});

	// Prevaricator

	$("#top-right").click(function() {
		$("#prevaricator-def").fadeOut("fast");
	});

	// Blithesome

	$("#top-right").click(function() {
		$("#blithesome-def").fadeOut("fast");
	});

	// Clement

	$("#top-right").click(function() {
		$("#clement-def").fadeOut("fast");
	});

	// Tarantism

	$("#top-right").click(function() {
		$("#tarantism-def").fadeOut("fast");
	});

	// Malinger

	$("#top-right").click(function() {
		$("#malinger-def").fadeOut("fast");
	});

	// Boîte

	$("#top-right").click(function() {
		$("#boîte-def").fadeOut("fast");
	});

	// Somnolent

	$("#top-right").click(function() {
		$("#somnolent-def").fadeOut("fast");
	});

	// Intractable

	$("#top-right").click(function() {
		$("#intractable-def").fadeOut("fast");
	});

	// Apogee

	$("#top-right").click(function() {
		$("#apogee-def").fadeOut("fast");
	});

	// Cynosure

	$("#top-right").click(function() {
		$("#cynosure-def").fadeOut("fast");
	});

	// Sobriquet

	$("#top-right").click(function() {
		$("#sobriquet-def").fadeOut("fast");
	});

	// Antediluvian

	$("#top-right").click(function() {
		$("#antediluvian-def").fadeOut("fast");
	});

	// Parvenu

	$("#top-right").click(function() {
		$("#parvenu-def").fadeOut("fast");
	});

	// Quotidian

	$("#top-right").click(function() {
		$("#quotidian-def").fadeOut("fast");
	});

	// Maudlin

	$("#top-right").click(function() {
		$("#maudlin-def").fadeOut("fast");
	});

	// Moiety

	$("#top-right").click(function() {
		$("#moiety-def").fadeOut("fast");
	});

	// Felicitous

	$("#top-right").click(function() {
		$("#felicitous-def").fadeOut("fast");
	});

	// Nugatory

	$("#top-right").click(function() {
		$("#nugatory-def").fadeOut("fast");
	});

	// Nosegay

	$("#top-right").click(function() {
		$("#nosegay-def").fadeOut("fast");
	});

	// Quagmire

	$("#top-right").click(function() {
		$("#quagmire-def").fadeOut("fast");
	});

	// Magniloquent

	$("#top-right").click(function() {
		$("#magniloquent-def").fadeOut("fast");
	});

	// Menagerie

	$("#top-right").click(function() {
		$("#menagerie-def").fadeOut("fast");
	});

	// Ennui

	$("#top-right").click(function() {
		$("#ennui-def").fadeOut("fast");
	});

	// Sybarite

	$("#top-right").click(function() {
		$("#sybarite-def").fadeOut("fast");
	});

	// Diablerie

	$("#top-right").click(function() {
		$("#diablerie-def").fadeOut("fast");
	});

	// ************************ audio files

	// Tendentious

	$('#tendentious-sound').click(function(){
   	$('#tendentious-wrap').append('<embed id="embed_player" src="sounds/tendentious.mp3" autostart="true" hidden="true"></embed>');
	});

	// Aureate

	$('#aureate-sound').click(function(){
   	$('#aureate-wrap').append('<embed id="embed_player" src="sounds/aureate.mp3" autostart="true" hidden="true"></embed>');
	});

	// Encomium

	$('#encomium-sound').click(function(){
   	$('#encomium-wrap').append('<embed id="embed_player" src="sounds/encomium.mp3" autostart="true" hidden="true"></embed>');
	});

	// Haberdasher

	$('#haberdasher-sound').click(function(){
   	$('#haberdasher-wrap').append('<embed id="embed_player" src="sounds/haberdasher.mp3" autostart="true" hidden="true"></embed>');
	});

	// Aubade

	$('#aubade-sound').click(function(){
   	$('#aubade-wrap').append('<embed id="embed_player" src="sounds/aubade.mp3" autostart="true" hidden="true"></embed>');
	});

	// Scintillant

	$('#scintillant-sound').click(function(){
   	$('#scintillant-wrap').append('<embed id="embed_player" src="sounds/scintillant.mp3" autostart="true" hidden="true"></embed>');
	});

	// Schadenfreude

	$('#schadenfreude-sound').click(function(){
   	$('#schadenfreude-wrap').append('<embed id="embed_player" src="sounds/schadenfreude.mp3" autostart="true" hidden="true"></embed>');
	});

	// Soubrette

	$('#soubrette-sound').click(function(){
   	$('#soubrette-wrap').append('<embed id="embed_player" src="sounds/soubrette.mp3" autostart="true" hidden="true"></embed>');
	});

	// Autochthonous

	$('#autochthonous-sound').click(function(){
   	$('#autochthonous-wrap').append('<embed id="embed_player" src="sounds/autochthonous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Cymotrichous

	$('#cymotrichous-sound').click(function(){
   	$('#cymotrichous-wrap').append('<embed id="embed_player" src="sounds/cymotrichous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Lethologica

	$('#lethologica-sound').click(function(){
   	$('#lethologica-wrap').append('<embed id="embed_player" src="sounds/lethologica.mp3" autostart="true" hidden="true"></embed>');
	});

	// Chimerical

	$('#chimerical-sound').click(function(){
   	$('#chimerical-wrap').append('<embed id="embed_player" src="sounds/chimerical.mp3" autostart="true" hidden="true"></embed>');
	});

	// Punctilious

	$('#punctilious-sound').click(function(){
   	$('#punctilious-wrap').append('<embed id="embed_player" src="sounds/punctilious.mp3" autostart="true" hidden="true"></embed>');
	});

	// Pulchritudinous

	$('#pulchritudinous-sound').click(function(){
   	$('#pulchritudinous-wrap').append('<embed id="embed_player" src="sounds/pulchritudinous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Loquacious

	$('#loquacious-sound').click(function(){
   	$('#loquacious-wrap').append('<embed id="embed_player" src="sounds/loquacious.mp3" autostart="true" hidden="true"></embed>');
	});

	// Winnow

	$('#winnow-sound').click(function(){
   	$('#winnow-wrap').append('<embed id="embed_player" src="sounds/winnow.mp3" autostart="true" hidden="true"></embed>');
	});

	// Succorance

	$('#succorance-sound').click(function(){
   	$('#succorance-wrap').append('<embed id="embed_player" src="sounds/succorance.mp3" autostart="true" hidden="true"></embed>');
	});

	// Tenebrific

	$('#tenebrific-sound').click(function(){
   	$('#tenebrific-wrap').append('<embed id="embed_player" src="sounds/tenebrific.mp3" autostart="true" hidden="true"></embed>');
	});

	// Epistolize

	$('#epistolize-sound').click(function(){
   	$('#epistolize-wrap').append('<embed id="embed_player" src="sounds/epistolize.mp3" autostart="true" hidden="true"></embed>');
	});

	// Commensal

	$('#commensal-sound').click(function(){
   	$('#commensal-wrap').append('<embed id="embed_player" src="sounds/commensal.mp3" autostart="true" hidden="true"></embed>');
	});

	// Sternutation

	$('#sternutation-sound').click(function(){
   	$('#sternutation-wrap').append('<embed id="embed_player" src="sounds/sternutation.mp3" autostart="true" hidden="true"></embed>');
	});

	// Skookum

	$('#skookum-sound').click(function(){
   	$('#skookum-wrap').append('<embed id="embed_player" src="sounds/skookum.mp3" autostart="true" hidden="true"></embed>');
	});

	// Pigsney

	$('#pigsney-sound').click(function(){
   	$('#pigsney-wrap').append('<embed id="embed_player" src="sounds/pigsney.mp3" autostart="true" hidden="true"></embed>');
	});

	// Dowie

	$('#dowie-sound').click(function(){
   	$('#dowie-wrap').append('<embed id="embed_player" src="sounds/dowie.mp3" autostart="true" hidden="true"></embed>');
	});

	// Stour

	$('#stour-sound').click(function(){
   	$('#stour-wrap').append('<embed id="embed_player" src="sounds/stour.mp3" autostart="true" hidden="true"></embed>');
	});

	// Sodality

	$('#sodality-sound').click(function(){
   	$('#sodality-wrap').append('<embed id="embed_player" src="sounds/sodality.mp3" autostart="true" hidden="true"></embed>');
	});

	// Verbigeration

	$('#verbigeration-sound').click(function(){
   	$('#verbigeration-wrap').append('<embed id="embed_player" src="sounds/verbigeration.mp3" autostart="true" hidden="true"></embed>');
	});

	// Thalassic

	$('#thalassic-sound').click(function(){
   	$('#thalassic-wrap').append('<embed id="embed_player" src="sounds/thalassic.mp3" autostart="true" hidden="true"></embed>');
	});

	// Subfuscous

	$('#subfuscous-sound').click(function(){
   	$('#subfuscous-wrap').append('<embed id="embed_player" src="sounds/subfuscous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Larrikin

	$('#larrikin-sound').click(function(){
   	$('#larrikin-wrap').append('<embed id="embed_player" src="sounds/larrikin.mp3" autostart="true" hidden="true"></embed>');
	});

	// Frenetic

	$('#frenetic-sound').click(function(){
   	$('#frenetic-wrap').append('<embed id="embed_player" src="sounds/frenetic.mp3" autostart="true" hidden="true"></embed>');
	});

	// Oeuvre

	$('#oeuvre-sound').click(function(){
   	$('#oeuvre-wrap').append('<embed id="embed_player" src="sounds/oeuvre.mp3" autostart="true" hidden="true"></embed>');
	});

	// Crapehanger

	$('#crapehanger-sound').click(function(){
   	$('#crapehanger-wrap').append('<embed id="embed_player" src="sounds/crapehanger.mp3" autostart="true" hidden="true"></embed>');
	});

	// Horology

	$('#horology-sound').click(function(){
   	$('#horology-wrap').append('<embed id="embed_player" src="sounds/horology.mp3" autostart="true" hidden="true"></embed>');
	});

	// Pusillanimous

	$('#pusillanimous-sound').click(function(){
   	$('#pusillanimous-wrap').append('<embed id="embed_player" src="sounds/pusillanimous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Anatine

	$('#anatine-sound').click(function(){
   	$('#anatine-wrap').append('<embed id="embed_player" src="sounds/anatine.mp3" autostart="true" hidden="true"></embed>');
	});

	// Hoyden

	$('#hoyden-sound').click(function(){
   	$('#hoyden-wrap').append('<embed id="embed_player" src="sounds/hoyden.mp3" autostart="true" hidden="true"></embed>');
	});

	// Bovarism

	$('#bovarism-sound').click(function(){
   	$('#bovarism-wrap').append('<embed id="embed_player" src="sounds/bovarism.mp3" autostart="true" hidden="true"></embed>');
	});

	// Pabulum

	$('#pabulum-sound').click(function(){
   	$('#pabulum-wrap').append('<embed id="embed_player" src="sounds/pabulum.mp3" autostart="true" hidden="true"></embed>');
	});

	// Tiffin

	$('#tiffin-sound').click(function(){
   	$('#tiffin-wrap').append('<embed id="embed_player" src="sounds/tiffin.mp3" autostart="true" hidden="true"></embed>');
	});

	// Juvenescent

	$('#juvenescent-sound').click(function(){
   	$('#juvenescent-wrap').append('<embed id="embed_player" src="sounds/juvenescent.mp3" autostart="true" hidden="true"></embed>');
	});

	// Mythomane

	$('#mythomane-sound').click(function(){
   	$('#mythomane-wrap').append('<embed id="embed_player" src="sounds/mythomane.mp3" autostart="true" hidden="true"></embed>');
	});

	// Exiguous

	$('#exiguous-sound').click(function(){
   	$('#exiguous-wrap').append('<embed id="embed_player" src="sounds/exiguous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Calvous

	$('#calvous-sound').click(function(){
   	$('#calvous-wrap').append('<embed id="embed_player" src="sounds/calvous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Flapdoodle

	$('#flapdoodle-sound').click(function(){
   	$('#flapdoodle-wrap').append('<embed id="embed_player" src="sounds/flapdoodle.mp3" autostart="true" hidden="true"></embed>');
	});

	// Galoot

	$('#galoot-sound').click(function(){
   	$('#galoot-wrap').append('<embed id="embed_player" src="sounds/galoot.mp3" autostart="true" hidden="true"></embed>');
	});

	// Gloaming

	$('#gloaming-sound').click(function(){
   	$('#gloaming-wrap').append('<embed id="embed_player" src="sounds/gloaming.mp3" autostart="true" hidden="true"></embed>');
	});

	// Interrobang

	$('#interrobang-sound').click(function(){
   	$('#interrobang-wrap').append('<embed id="embed_player" src="sounds/interrobang.mp3" autostart="true" hidden="true"></embed>');
	});

	// Taradiddle

	$('#taradiddle-sound').click(function(){
   	$('#taradiddle-wrap').append('<embed id="embed_player" src="sounds/taradiddle.mp3" autostart="true" hidden="true"></embed>');
	});

	// Camelopard

	$('#camelopard-sound').click(function(){
   	$('#camelopard-wrap').append('<embed id="embed_player" src="sounds/camelopard.mp3" autostart="true" hidden="true"></embed>');
	});

	// Klatsch

	$('#klatsch-sound').click(function(){
   	$('#klatsch-wrap').append('<embed id="embed_player" src="sounds/klatsch.mp3" autostart="true" hidden="true"></embed>');
	});

	// Equanimity

	$('#equanimity-sound').click(function(){
   	$('#equanimity-wrap').append('<embed id="embed_player" src="sounds/equanimity.mp3" autostart="true" hidden="true"></embed>');
	});

	// Brusque

	$('#brusque-sound').click(function(){
   	$('#brusque-wrap').append('<embed id="embed_player" src="sounds/brusque.mp3" autostart="true" hidden="true"></embed>');
	});

	// Desiderium

	$('#desiderium-sound').click(function(){
   	$('#desiderium-wrap').append('<embed id="embed_player" src="sounds/desiderium.mp3" autostart="true" hidden="true"></embed>');
	});

	// Serein

	$('#serein-sound').click(function(){
   	$('#serein-wrap').append('<embed id="embed_player" src="sounds/serein.mp3" autostart="true" hidden="true"></embed>');
	});

	// Crinose

	$('#crinose-sound').click(function(){
   	$('#crinose-wrap').append('<embed id="embed_player" src="sounds/crinose.mp3" autostart="true" hidden="true"></embed>');
	});

	// Sweven

	$('#sweven-sound').click(function(){
   	$('#sweven-wrap').append('<embed id="embed_player" src="sounds/sweven.mp3" autostart="true" hidden="true"></embed>');
	});

	// Osculate

	$('#osculate-sound').click(function(){
   	$('#osculate-wrap').append('<embed id="embed_player" src="sounds/osculate.mp3" autostart="true" hidden="true"></embed>');
	});

	// Estivate

	$('#estivate-sound').click(function(){
   	$('#estivate-wrap').append('<embed id="embed_player" src="sounds/estivate.mp3" autostart="true" hidden="true"></embed>');
	});

	// Gibbosity

	$('#gibbosity-sound').click(function(){
   	$('#gibbosity-wrap').append('<embed id="embed_player" src="sounds/gibbosity.mp3" autostart="true" hidden="true"></embed>');
	});

	// Prate

	$('#prate-sound').click(function(){
   	$('#prate-wrap').append('<embed id="embed_player" src="sounds/prate.mp3" autostart="true" hidden="true"></embed>');
	});

	// Prevaricator

	$('#prevaricator-sound').click(function(){
   	$('#prevaricator-wrap').append('<embed id="embed_player" src="sounds/prevaricator.mp3" autostart="true" hidden="true"></embed>');
	});

	// Blithesome

	$('#blithesome-sound').click(function(){
   	$('#blithesome-wrap').append('<embed id="embed_player" src="sounds/blithesome.mp3" autostart="true" hidden="true"></embed>');
	});

	// Clement

	$('#clement-sound').click(function(){
   	$('#clement-wrap').append('<embed id="embed_player" src="sounds/clement.mp3" autostart="true" hidden="true"></embed>');
	});

	// Tarantism

	$('#tarantism-sound').click(function(){
   	$('#tarantism-wrap').append('<embed id="embed_player" src="sounds/tarantism.mp3" autostart="true" hidden="true"></embed>');
	});

	// Malinger

	$('#malinger-sound').click(function(){
   	$('#malinger-wrap').append('<embed id="embed_player" src="sounds/malinger.mp3" autostart="true" hidden="true"></embed>');
	});

	// Boîte

	$('#boite-sound').click(function(){
   	$('#boite-wrap').append('<embed id="embed_player" src="sounds/boite.mp3" autostart="true" hidden="true"></embed>');
	});

	// Somnolent

	$('#somnolent-sound').click(function(){
   	$('#somnolent-wrap').append('<embed id="embed_player" src="sounds/somnolent.mp3" autostart="true" hidden="true"></embed>');
	});

	// Intractable

	$('#intractable-sound').click(function(){
   	$('#intractable-wrap').append('<embed id="embed_player" src="sounds/intractable.mp3" autostart="true" hidden="true"></embed>');
	});

	// Apogee

	$('#apogee-sound').click(function(){
   	$('#apogee-wrap').append('<embed id="embed_player" src="sounds/apogee.mp3" autostart="true" hidden="true"></embed>');
	});

	// Cynosure

	$('#cynosure-sound').click(function(){
   	$('#cynosure-wrap').append('<embed id="embed_player" src="sounds/cynosure.mp3" autostart="true" hidden="true"></embed>');
	});

	// Sobriquet

	$('#sobriquet-sound').click(function(){
   	$('#sobriquet-wrap').append('<embed id="embed_player" src="sounds/sobriquet.mp3" autostart="true" hidden="true"></embed>');
	});

	// Antediluvian

	$('#antediluvian-sound').click(function(){
   	$('#antediluvian-wrap').append('<embed id="embed_player" src="sounds/antediluvian.mp3" autostart="true" hidden="true"></embed>');
	});

	// Parvenu

	$('#parvenu-sound').click(function(){
   	$('#parvenu-wrap').append('<embed id="embed_player" src="sounds/parvenu.mp3" autostart="true" hidden="true"></embed>');
	});

	// Quotidian

	$('#quotidian-sound').click(function(){
   	$('#quotidian-wrap').append('<embed id="embed_player" src="sounds/quotidian.mp3" autostart="true" hidden="true"></embed>');
	});

	// Maudlin

	$('#maudlin-sound').click(function(){
   	$('#maudlin-wrap').append('<embed id="embed_player" src="sounds/maudlin.mp3" autostart="true" hidden="true"></embed>');
	});

	// Moiety

	$('#moiety-sound').click(function(){
   	$('#moiety-wrap').append('<embed id="embed_player" src="sounds/moiety.mp3" autostart="true" hidden="true"></embed>');
	});

	// Felicitous

	$('#felicitous-sound').click(function(){
   	$('#felicitous-wrap').append('<embed id="embed_player" src="sounds/felicitous.mp3" autostart="true" hidden="true"></embed>');
	});

	// Nugatory

	$('#nugatory-sound').click(function(){
   	$('#nugatory-wrap').append('<embed id="embed_player" src="sounds/nugatory.mp3" autostart="true" hidden="true"></embed>');
	});

	// Nosegay

	$('#nosegay-sound').click(function(){
   	$('#nosegay-wrap').append('<embed id="embed_player" src="sounds/nosegay.mp3" autostart="true" hidden="true"></embed>');
	});

	// Quagmire

	$('#quagmire-sound').click(function(){
   	$('#quagmire-wrap').append('<embed id="embed_player" src="sounds/quagmire.mp3" autostart="true" hidden="true"></embed>');
	});

	// Magniloquent

	$('#magniloquent-sound').click(function(){
   	$('#magniloquent-wrap').append('<embed id="embed_player" src="sounds/magniloquent.mp3" autostart="true" hidden="true"></embed>');
	});

	// Menagerie

	$('#menagerie-sound').click(function(){
   	$('#menagerie-wrap').append('<embed id="embed_player" src="sounds/menagerie.mp3" autostart="true" hidden="true"></embed>');
	});

	// Ennui

	$('#ennui-sound').click(function(){
   	$('#ennui-wrap').append('<embed id="embed_player" src="sounds/ennui.mp3" autostart="true" hidden="true"></embed>');
	});

	// Sybarite

	$('#sybarite-sound').click(function(){
   	$('#sybarite-wrap').append('<embed id="embed_player" src="sounds/sybarite.mp3" autostart="true" hidden="true"></embed>');
	});

	// Diablerie

	$('#diablerie-sound').click(function(){
   	$('#diablerie-wrap').append('<embed id="embed_player" src="sounds/diablerie.mp3" autostart="true" hidden="true"></embed>');
	});


});