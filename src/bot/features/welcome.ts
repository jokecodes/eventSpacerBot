import type { Context } from '#root/bot/context.js'
import { logHandle } from '#root/bot/helpers/logging.js'
import { Composer } from 'grammy'

const composer = new Composer<Context>()

const feature = composer.chatType('private')

feature.command('start', logHandle('command-start'), (ctx) => {
  return Promise.all([ctx.reply(ctx.t('welcome')), ctx.reply(ctx.t('calendar'))])
})

export { composer as welcomeFeature }
