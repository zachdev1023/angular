import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from '../interface/hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {
        id:1,
        name:'Axe (Mogul Khan)',
        background: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.",
        description: 'One after another, Axe cuts down his foes. Marching ahead of his team, he locks his enemies in battle then counters their blows with a deadly spin of his weapon. Slamming his culling blade through a weakened enemy, he is always charging onward.',
        abilities: "Berserker's Call, Battle Hunger, Counter Helix, Culling Blade",
        primaryAttribute: 'Strength',
    },
    {
      id: 2,
      name: 'Anti-Mage (Magina)',
      background: "Magina's origins are mysterious. He is the last of an ancient sect dedicated to the annihilation of magic. From early childhood, he was trained in anti-magic techniques, with a fervor and discipline that matched the extremity of his devotion. His mastery of the arts of anti-magic allow him to rip through any sorcerer’s spells, leaving them powerless before him.",
      description: "A tireless enemy of mages and spellcasters, Anti-Mage channels his singular hatred for magic into an arsenal of specialized skills. Destroying his enemies' mana and using the advantage to deal powerful finishing blows, he is an unmatched foe for spellcasters.",
      abilities: "Mana Break, Blink, Spell Shield, Mana Void",
      primaryAttribute: 'Agility'
    },
    {
      id: 3,
      name: 'Crystal Maiden (Rylai)',
      background: "Born in a temperate realm, Rylai the Crystal Maiden is a radiant beauty who fled the frozen north when her sister Lina's uncontrollable fires started to blaze. In her new home, Rylai discovered her natural talents for ice magic and devoted herself to mastering the frozen arts. Her affinity for the cold enables her to summon blasts of icy energy to freeze and shatter her foes.",
      description: "A spellcaster of unparalleled frost magic, Crystal Maiden brings a chilling presence to the battlefield. Slowing her enemies and freezing them in place, she assists her allies with powerful ice spells and a radiant, rejuvenating aura.",
      abilities: "Crystal Nova, Frostbite, Arcane Aura, Freezing Field",
      primaryAttribute: 'Intelligence'
    },
    {
      id: 4,
      name: 'Juggernaut (Yurnero)',
      background: "No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is a mystery he is keen to keep, for he is the last of his kind. Betrayed and cast out by his people, Yurnero wanders the lands, looking for a way to restore his honor. His mastery of the blade is unparalleled, and in battle, he is a blur of motion, spinning and slashing through his enemies with a deadly grace.",
      description: "A master of the art of swordplay, Juggernaut relies on his agility and precision to slice through his foes. With a blend of lethal strikes and protective enchantments, he is both a fierce attacker and a resilient warrior.",
      abilities: "Blade Fury, Healing Ward, Blade Dance, Omnislash",
      primaryAttribute: 'Agility'
    },
    {
      id: 5,
      name: 'Invoker (Carl)',
      background: "The Arsenal Magus, known as Invoker, is a prodigious sorcerer who wields an unmatched breadth of spells. Once known as Kael, he chose the name Invoker to reflect his mastery of invocation magic. His genius intellect and deep understanding of arcane forces allow him to cast a wide variety of powerful spells, making him a versatile and unpredictable adversary on the battlefield.",
      description: "A master of arcane arts, Invoker commands a vast array of spells to manipulate and dominate the battlefield. With his ability to invoke powerful magic, he can adapt to any situation and counter his enemies' strategies with precision.",
      abilities: "Quas, Wex, Exort, Invoke",
      primaryAttribute: 'Intelligence'
    },
    {
      id: 6,
      name: 'Pudge (The Butcher)',
      background: "In the Fields of Endless Carnage, there wanders a butcher named Pudge. His hunger for flesh is insatiable, and his bloated form is a testament to his voracious appetite. Wielding a massive hook and a cleaver, he pulls enemies close to carve them up, savoring every moment of their demise. His body is a grotesque collection of the flesh and bones of his countless victims.",
      description: "A gruesome brawler, Pudge uses his hook to reel in enemies and his massive cleaver to chop them up. His relentless pursuit of flesh makes him a terrifying presence on the battlefield, capable of dragging foes to their doom and spreading a deadly plague among his enemies.",
      abilities: "Meat Hook, Rot, Flesh Heap, Dismember",
      primaryAttribute: 'Strength'
    },
    {
      id: 7,
      name: 'Queen of Pain (Akasha)',
      background: "Akasha, the Queen of Pain, revels in the suffering of others. Once a royal concubine, she embraced the dark arts to gain power and left her former life behind. She now inflicts torment with a sadistic pleasure, using her sonic abilities to shatter the minds and bodies of her enemies. Her beauty is as deadly as her scream, making her both a feared and coveted figure.",
      description: "A powerful and sadistic sorceress, Queen of Pain uses her agility and dark magic to dominate the battlefield. With a combination of mobility and lethal screams, she can quickly close in on enemies and deal devastating damage.",
      abilities: "Shadow Strike, Blink, Scream of Pain, Sonic Wave",
      primaryAttribute: 'Intelligence'
    },
    {
      id: 8,
      name: 'Sven (Rogue Knight)',
      background: "Sven, the Rogue Knight, is a paragon of honor and strength. Born to a human and a Vigil Knight, he was rejected by both societies and wandered the world alone. He now follows the strict Code of the Vigil Knights, using his unmatched physical prowess and mastery of the sword to uphold justice. His strength and discipline are legendary, and he fights with unwavering conviction.",
      description: "A warrior of exceptional strength and honor, Sven charges into battle with his mighty sword. With his impressive physical abilities and powerful stuns, he can cleave through enemy lines and protect his allies with equal ferocity.",
      abilities: "Storm Hammer, Great Cleave, Warcry, God's Strength",
      primaryAttribute: 'Strength'
    },
    {
      id: 9,
      name: 'Viper (Netherdrake)',
      background: "Viper, the Netherdrake, was once a docile creature until he was corrupted by dark magic. Now, he soars through the skies, spreading poison and terror wherever he goes. His acidic venom and toxic breath make him a deadly predator, capable of bringing down the mightiest of foes. Viper's transformation from a passive drake to a fearsome beast is a tale of the corrupting power of magic.",
      description: "A venomous dragon, Viper uses his corrosive abilities to wear down his enemies over time. With a combination of poisonous attacks and debilitating strikes, he is a relentless adversary that weakens and destroys his foes from a distance.",
      abilities: "Poison Attack, Nethertoxin, Corrosive Skin, Viper Strike",
      primaryAttribute: 'Agility'
    },
    {
      id: 10,
      name: 'Witch Doctor (Zharvakko)',
      background: "Zharvakko, the Witch Doctor, is a master of voodoo and dark magic. Raised in the shadowy swamps of his homeland, he learned to harness the power of spirits and curses. His skills in healing and hexing make him a versatile support hero, able to turn the tide of battle with his potent concoctions and mystical spells. He is both feared and respected for his deep understanding of the supernatural.",
      description: "A healer and hexer, Witch Doctor uses his voodoo magic to support his allies and curse his enemies. With a mix of restorative abilities and damaging curses, he can sway the course of battle and provide crucial assistance to his team.",
      abilities: "Paralyzing Cask, Voodoo Restoration, Maledict, Death Ward",
      primaryAttribute: 'Intelligence'
    }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
