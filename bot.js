
                let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var Salon_message__22_3E_22, Suggestion, Participants_concours, Changement__pseudo_, Pseudo_de_la_suggestion, Salon_de_Broadcast, R_C3_A9ponses_suggestions__contenu_, Concours__Salon_, Titre_Broadcast, R_C3_A9ponses_suggestions__id_cr_C3_A9ateur_, Concours__Titre_, R_C3_A9ponses_suggestion__raison_, Couleur_Broadcast, Concours__Nombre_de_gagants_, Contenue_Broadcast;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/nick') {
    (s4dmessage.channel).send(String((String(s4dmessage.member) + ' quel est le pseudo que vous voulez avoir ?')));
    (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       Changement__pseudo_ = (s4d.reply);
      (s4dmessage.channel).send(String(([s4dmessage.member,' acceptez vous le changement de pseudo pour "',Changement__pseudo_,'" ? (Réponses possibles : **oui** ou **non**)'].join(''))));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         if ((s4d.reply) == 'oui') {
          (s4dmessage.member).setNickname(Changement__pseudo_);
          (s4dmessage.channel).send(String('Changement de pseudo effectué avec succès !'));
        } else {
          if ((s4d.reply) == 'non') {
            (s4dmessage.channel).send(String((String(s4dmessage.member) + ' annulation du changement de nom.')));
          } else {
            (s4dmessage.channel).send(String(([s4dmessage.member,' cette réponse n\'est pas valide, le bot n\'accepte pas certains types de textes (majuscules, tirets, chiffres et nombres, accents, ect...)','\n','Veuillez recommencer depuis le début (f/nick).'].join(''))));
          }
        }

       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String((String(s4dmessage.member) + ' annulation du changement de nom.')));
       });
     s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String((String(s4dmessage.member) + ' annulation du changement de nom.')));
     });}

});

s4d.client.on('message', async (s4dmessage) => {
  if (((s4dmessage.channel || {}).id) == '860462016220889098') {
    if ((s4dmessage.author.id) == '860181968439214100') {
    } else {
      Suggestion = (s4dmessage.content);
      Pseudo_de_la_suggestion = (s4dmessage.member);
      s4dmessage.delete();
      await delay(Number(1)*1000);
      (s4dmessage.channel).send(
              {
                  embed: {
                      title: 'Suggestion',
                      color: '#ffffff',
                      image: { url: null },

                      description: (['Suggestion proposée par : ',Pseudo_de_la_suggestion,'\n','\n',Suggestion,'\n','\n','Ajoutez la réaction ✅ OU ❌.','\n','\n','Préfixe du bot : f/'].join('')),
                      footer: { text: 'FarmeLand | Créez vous aussi une suggestion !' },
                      thumbnail: { url: null }

                  }
              }
          );
    }
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/bc') {
    if (((s4dmessage.channel || {}).id) == '860278319945089044') {
      (s4dmessage.channel).send(String('Dans quel salon le Broadcast doit se faire ? (Donner l\'identifiant)'));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         Salon_de_Broadcast = (s4d.reply);
        (s4dmessage.channel).send(String('Quel est votre titre de Broadcast ?'));
        (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           Titre_Broadcast = (s4d.reply);
          (s4dmessage.channel).send(String('Quelle est la couleur de votre broadcast ? (**rouge**, **vert**, **jaune**, **bleu**, **blanc**)'));
          (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
             if ((s4d.reply) == 'rouge') {
              Couleur_Broadcast = '#ff0000';
              (s4dmessage.channel).send(String('Quel est le contenu du Broadcast ?'));
              (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                 Contenue_Broadcast = (s4d.reply);
                s4d.client.channels.cache.get(Salon_de_Broadcast).send(
                        {
                            embed: {
                                title: Titre_Broadcast,
                                color: Couleur_Broadcast,
                                image: { url: null },

                                description: Contenue_Broadcast,
                                footer: { text: 'FarmeLand | Season Sky V2' },
                                thumbnail: { url: null }

                            }
                        }
                    );
                (s4dmessage.channel).send(String((['Broadcast envoyé dans le salon ',s4d.client.channels.cache.get(Salon_de_Broadcast),' !'].join(''))));

               s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
               });} else {
              if ((s4d.reply) == 'vert') {
                Couleur_Broadcast = '#33cc00';
                (s4dmessage.channel).send(String('Quel est le contenu du Broadcast ?'));
                (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                   Contenue_Broadcast = (s4d.reply);
                  s4d.client.channels.cache.get(Salon_de_Broadcast).send(
                          {
                              embed: {
                                  title: Titre_Broadcast,
                                  color: Couleur_Broadcast,
                                  image: { url: null },

                                  description: Contenue_Broadcast,
                                  footer: { text: 'FarmeLand | Season Sky V2' },
                                  thumbnail: { url: null }

                              }
                          }
                      );
                  (s4dmessage.channel).send(String((['Broadcast envoyé dans le salon ',s4d.client.channels.cache.get(Salon_de_Broadcast),' !'].join(''))));

                 s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
                 });} else {
                if ((s4d.reply) == 'jaune') {
                  Couleur_Broadcast = '#ffcc33';
                  (s4dmessage.channel).send(String('Quel est le contenu du Broadcast ?'));
                  (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                     Contenue_Broadcast = (s4d.reply);
                    s4d.client.channels.cache.get(Salon_de_Broadcast).send(
                            {
                                embed: {
                                    title: Titre_Broadcast,
                                    color: Couleur_Broadcast,
                                    image: { url: null },

                                    description: Contenue_Broadcast,
                                    footer: { text: 'FarmeLand | Season Sky V2' },
                                    thumbnail: { url: null }

                                }
                            }
                        );
                    (s4dmessage.channel).send(String((['Broadcast envoyé dans le salon ',s4d.client.channels.cache.get(Salon_de_Broadcast),' !'].join(''))));

                   s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
                   });} else {
                  if ((s4d.reply) == 'bleu') {
                    Couleur_Broadcast = '#3366ff';
                    (s4dmessage.channel).send(String('Quel est le contenu du Broadcast ?'));
                    (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                       Contenue_Broadcast = (s4d.reply);
                      s4d.client.channels.cache.get(Salon_de_Broadcast).send(
                              {
                                  embed: {
                                      title: Titre_Broadcast,
                                      color: Couleur_Broadcast,
                                      image: { url: null },

                                      description: Contenue_Broadcast,
                                      footer: { text: 'FarmeLand | Season Sky V2' },
                                      thumbnail: { url: null }

                                  }
                              }
                          );
                      (s4dmessage.channel).send(String((['Broadcast envoyé dans le salon ',s4d.client.channels.cache.get(Salon_de_Broadcast),' !'].join(''))));

                     s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
                     });} else {
                    if ((s4d.reply) == 'blanc') {
                      Couleur_Broadcast = '#ffffff';
                      (s4dmessage.channel).send(String('Quel est le contenu du Broadcast ?'));
                      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (10*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                         Contenue_Broadcast = (s4d.reply);
                        s4d.client.channels.cache.get(Salon_de_Broadcast).send(
                                {
                                    embed: {
                                        title: Titre_Broadcast,
                                        color: Couleur_Broadcast,
                                        image: { url: null },

                                        description: Contenue_Broadcast,
                                        footer: { text: 'FarmeLand | Season Sky V2' },
                                        thumbnail: { url: null }

                                    }
                                }
                            );
                        (s4dmessage.channel).send(String((['Broadcast envoyé dans le salon ',s4d.client.channels.cache.get(Salon_de_Broadcast),' !'].join(''))));

                       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
                       });} else {
                      (s4dmessage.channel).send(String('Cette couleur n\'est pas reconnue. (**rouge**, **vert**, **jaune**, **bleu**, **blanc**)'));
                    }
                  }
                }
              }
            }

           s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
           });
         s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
         });
       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la commande Broadcast.'));
       });} else {
      (s4dmessage.channel).send(String('Vous n\'avez pas la permission de faire cette commande.'));
    }
  }

});

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(String('Season Sky V2 | f/help'));
  s4d.client.channels.cache.get('860203127306584094').send(String('Bot on !'));

});

s4d.client.login(process.env.TOKEN).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/repondre') {
    if (((s4dmessage.channel || {}).id) == '860500752221208596') {
      (s4dmessage.channel).send(String(([s4dmessage.author.username,' ','quel est le contenu de la suggestion ?'].join(''))));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         R_C3_A9ponses_suggestions__contenu_ = (s4d.reply);
        (s4dmessage.channel).send(String(([s4dmessage.author.username,' ','quel est le pseudo du joueur ?'].join(''))));
        (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           R_C3_A9ponses_suggestions__id_cr_C3_A9ateur_ = (s4d.reply);
          (s4dmessage.channel).send(String(([s4dmessage.author.username,' ','quel est votre réponse à la suggestion ?'].join(''))));
          (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
             R_C3_A9ponses_suggestion__raison_ = (s4d.reply);
            s4d.client.channels.cache.get('860502275427139614').send(
                    {
                        embed: {
                            title: (['Réponse à la suggestion de ',R_C3_A9ponses_suggestions__id_cr_C3_A9ateur_,' !'].join('')),
                            color: '#ffffff',
                            image: { url: null },

                            description: (['Suggestion proposée : ','\n','\n',R_C3_A9ponses_suggestions__contenu_,'\n','\n','Réponse attribuée : ','\n','\n',R_C3_A9ponses_suggestion__raison_,'\n'].join('')),
                            footer: { text: 'FarmeLand | Créez vous aussi votre suggestion !' },
                            thumbnail: { url: null }

                        }
                    }
                );

           s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la réponse.'));
           });
         s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la réponse.'));
         });
       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la réponse.'));
       });} else {
      (s4dmessage.channel).send(String(([s4dmessage.author.username,' ','vous n\'avez pas la permission de faire cette commande.'].join(''))));
    }
  }

});

s4d.client.on('message', async (s4dmessage) => {
  Salon_message__22_3E_22 = (s4dmessage.channel);
  if (String((s4dmessage.content)).includes(String('m/'))) {
    if (String(((s4dmessage.channel || {}).name)).includes(String('ticket-'))) {
    } else {
      await delay(Number(2)*1000);
      Salon_message__22_3E_22.bulkDelete((1|1))
      await delay(Number(2)*1000);
      s4dmessage.channel.send(String(('Ce n\'est pas un salon pour ces commandes. Veuillez les faire dans le salon ' + String(s4d.client.channels.cache.get('860171514074759188')))));
    }
  } else {
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/clear') {
    if ((s4dmessage.author.id) == '603609379605970965') {
      (s4dmessage.channel).bulkDelete((100|1))} else {
      (s4dmessage.channel).send(String('Vous n\'avez pas la permission de faire cette commande.'));
    }
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/help') {
    (s4dmessage.channel).send(
            {
                embed: {
                    title: 'Aide commande',
                    color: '#009900',
                    image: { url: null },

                    description: (['**Commandes du bot**','\n','\n','f/help','\n','f/ping','\n','f/clear','\n','f/aventure','\n','f/nick (quelques problèmes pour le moment)','\n','\n','Ce bot est surtout là pour les annonces, et aider les joueurs. N\'hésitez pas à faire une suggestion si vous avez des idées d\'ajouts pour le bot.','\n','``Préfixe : f/`` '].join('')),
                    footer: { text: 'FarmeLand | Season Sky V2' },
                    thumbnail: { url: null }

                }
            }
        );
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/aventure') {
    (s4dmessage.channel).send(String(([s4dmessage.author.username,' afin de commencer ton aventure, tu dois te rendre dans le channel ',s4d.client.channels.cache.get('860171514074759188'),', là-bas tu pourras commencer à farmer !'].join(''))));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/g') {
    (s4dmessage.channel).send(String('Lancement de l\'interaction pour commencer un concours !'));
    (s4dmessage.channel).send(String('Dans quel salon le concours doit se faire ? (Donner l\'identifiant)'));
    (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       Concours__Salon_ = (s4d.reply);
      (s4dmessage.channel).send(String('Salon sauvegardé !'));
      (s4dmessage.channel).send(String('Quel est le titre du concours ?'));
      (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         Concours__Titre_ = (s4d.reply);
        (s4dmessage.channel).send(String((['Titre accepté " ',Concours__Titre_,'" !'].join(''))));
        (s4dmessage.channel).send(String('Combien de gagnant(s) ? (4 max)'));
        (s4dmessage.channel).awaitMessages((m) => m.author.id === (s4dmessage.member).id, { time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           Concours__Nombre_de_gagants_ = (s4d.reply);
          s4d.client.channels.cache.get(Concours__Salon_).send(String('🎉 CONCOURS 🎉'));
          s4d.client.channels.cache.get(Concours__Salon_).send(
                  {
                      embed: {
                          title: Concours__Titre_,
                          color: '#993399',
                          image: { url: null },

                          description: (['Réagissez avec 🎉 pour participer !','\n','Durée : 1h','\n','Lancé par Kyllian49'].join('')),
                          footer: { text: (String(Concours__Nombre_de_gagants_) + ' gagnant(s) | FarmeLand') },
                          thumbnail: { url: null }

                      }
                  }
              );
          (s4dmessage.channel).send(String('Concours crée !'));
          await delay(Number(30)*1000);
          if (Concours__Nombre_de_gagants_ == '1') {
            s4d.client.channels.cache.get(Concours__Salon_).send(String((['Gagnant du concours ',listsGetRandomItem(Participants_concours, true),'.'].join(''))));
          } else {
            if (Concours__Nombre_de_gagants_ == '2') {
              s4d.client.channels.cache.get(Concours__Salon_).send(String((['Gagnants du concours ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),'.'].join(''))));
            } else {
              if (Concours__Nombre_de_gagants_ == '3') {
                s4d.client.channels.cache.get(Concours__Salon_).send(String((['Gagnants du concours ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),'.'].join(''))));
              } else {
                if (Concours__Nombre_de_gagants_ == '4') {
                  s4d.client.channels.cache.get(Concours__Salon_).send(String((['Gagnants du concours ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),', ',listsGetRandomItem(Participants_concours, true),'.'].join(''))));
                }
              }
            }
          }

         s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la création concours.'));
         });
       s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la création concours.'));
       });
     s4d.reply = null; }).catch(async (e) => { console.error(e);   (s4dmessage.channel).send(String('Abandon de la création concours.'));
     });}

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == 'f/ping') {
    (s4dmessage.channel).send(
            {
                embed: {
                    title: 'Ping du bot :',
                    color: '#990000',
                    image: { url: null },

                    description: (['\n','💓 Ping : ',s4d.client.ws.ping].join('')),
                    footer: { text: 'Préfixe du bot : f/' },
                    thumbnail: { url: null }

                }
            }
        );
  }

});

s4d.client.on('MESSAGE_REACTION_ADD', async (rGuild, rChannel, rMessage, rMember, rEmoji) => {
  if ((rEmoji) == '🎉') {
    var tmpX = Math.floor(Math.random() * Participants_concours.length);
    Participants_concours.splice(tmpX, 0, (rMember));
  }

});

                s4d;
            